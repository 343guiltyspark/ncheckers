import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Board } from "../components/board";
import { WelcomeBox } from "../components/welcomeBox";
import styles from "../styles/Home.module.css";
import { url } from "../helpers/url";
import { useState, useEffect } from "react";
import { socketConnect } from "../helpers/sockets";

export default function Home(props) {
  const [session, setSessionToken] = useState(null);
  const [moves, setMoves] = useState([0]);
  const [option, setOption] = useState(1);
  const [standBy, setStandBy] = useState("inPlay");
  const [io, setIO] = useState(null);
  const [board, setBoard] = useState([]);
  const [active, setActive] = useState(2);
  const [me, setMe] = useState(2); // Used to control player id when two or more devices are connected
  const [redScore, setRedScore] = useState(0);
  const [grayScore, setGrayScore] = useState(0);

  // Check Route to determine if there is a session ID submitted
  let sessionId;
  const callback = (res) => {
    sessionId = res.data.session;
    setSessionToken(sessionId);
  };

  useEffect(() => {
    //This effect runs if url cotains a /abcde route
    //If io is not set, set it by running socketConnect
    //If io is set then increase number of moves, setMoves state, setSessionToken,
    //and then broadcast the "sessionId" thru the "secondPlayer" socket channel.

    if (typeof props.sessionId != "undefined") {
      if (io == null) {
        console.log("Running Socket Connect");
        setMe(3);
        socketConnect(
          props.session,
          setStandBy,
          setIO,
          setBoard,
          setActive,
          setRedScore,
          setGrayScore
        );
      } else if (moves == 0) {
        let dupMoves = moves + 1;
        setMoves(dupMoves);
        setSessionToken(props.sessionId);
        io.emit("secondPlayer", props.sessionId);
      }
    } else if (session == null) {
      //Request initial token for fist load if game doesn't have a session
      url("get", "/", null, callback);
    }
  });

  return (
    <div className={styles.container}>
      <WelcomeBox
        option={option}
        setOption={setOption}
        setStandBy={setStandBy}
        socket={socketConnect}
        session={session}
        setIO={setIO}
        setBoard={setBoard}
        setActive={setActive}
        setRedScore={setRedScore}
        setGrayScore={setGrayScore}
      />
      <Header />
      <Board
        session={session}
        standBy={standBy}
        io={io}
        board={board}
        setBoard={setBoard}
        active={active}
        setActive={setActive}
        me={me}
        redScore={redScore}
        grayScore={grayScore}
        setRedScore={setRedScore}
        setGrayScore={setGrayScore}
      />
      <Footer />
    </div>
  );
}
