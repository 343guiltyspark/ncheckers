import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Board } from "../components/board";
import { WelcomeBox } from "../components/welcomeBox";
import styles from "../styles/Home.module.css";
import { url } from "../helpers/url";
import { useEffect, useState } from "react";
import { socketConnect } from "../helpers/sockets";
import { useRouter } from "next/router";

export default function Home() {
  console.log("Home");

  // Check Route to determine if there is a session ID submitted

  const router = useRouter();
  let sessionId = router.asPath;
  sessionId = sessionId.replace("/", "");
  sessionId = sessionId.length == 0 ? null : sessionId;

  //Set states
  const [session, setSessionToken] = useState(sessionId);
  const [option, setOption] = useState(1);
  const [standBy, setStandBy] = useState("activePlayer center");

  const callback = (res) => {
    console.log(res.data.session);

    session == null ? setSessionToken(res.data.session) : null;
  };

  //Request inital session token
  session == null ? url("get", "/", null, callback) : null;

  return (
    <div className={styles.container}>
      <WelcomeBox
        option={option}
        setOption={setOption}
        setStandBy={setStandBy}
        socket={socketConnect}
        session={session}
      />
      <Header />
      <Board session={session} standBy={standBy} />
      <Footer />
    </div>
  );
}
