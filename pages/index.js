import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Board } from "../components/board";
import { WelcomeBox } from "../components/welcomeBox";
import styles from "../styles/Home.module.css";
import { url } from "../helpers/url";
import { useState, useEffect } from "react";
import { socketConnect } from "../helpers/sockets";
import { useRouter } from "next/router";

export default function Home(props) {
  console.log("Home");
  console.log(props.session);
  const [session, setSessionToken] = useState(null);
  const [option, setOption] = useState(1);
  const [standBy, setStandBy] = useState("inPlay");
  const [io, setIO] = useState(null);
  const [board, setBoard] = useState([]);

  // Check Route to determine if there is a session ID submitted
  let sessionId;
  const callback = (res) => {
    sessionId = res.data.session;
    setSessionToken(sessionId);
  };
  const runSocket = () => {
    console.log("runSocket Executed");
    //io=socketConnect(a, b);
  };

  useEffect(() => {
    if (typeof props.sessionId != "undefined") {
      console.log(io);
      if (io == null) {
        console.log("Running Socket Connect");
        socketConnect(props.session, setStandBy, setIO, setBoard);
      } else {
        console.log("Io Emit");
        io.emit("secondPlayer", props.sessionId);
      }
      //io.emit("secondPlayer", "inPlay");
    } else if (session == null) {
      console.log("CallBackRun");
      url("get", "/", null, callback);
    }
  });

  console.log(session);
  console.log(io);
  //Request inital session token
  //typeof sessionId == "undefined" ? url("get", "/", null, callback) : null;

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
      />
      <Header />
      <Board
        session={session}
        standBy={standBy}
        io={io}
        board={board}
        setBoard={setBoard}
      />
      <Footer />
    </div>
  );
}
