import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Board } from "../components/board";
import { WelcomeBox } from "../components/welcomeBox";
import styles from "../styles/Home.module.css";
import { url } from "../helpers/url";
import { useEffect, useState } from "react";
import { socketConnect } from "../helpers/sockets";

export default function Home() {
  const [session, setSessionToken] = useState(null);
  const [option, setOption] = useState(1);

  const callback = (res) => {
    console.log(res.data.session);

    session == null ? setSessionToken(res.data.session) : null;
  };

  //Request inital session token
  useEffect(() => {
    session == null ? url("get", "/", null, callback) : null;
  });

  return (
    <div className={styles.container}>
      <WelcomeBox
        option={option}
        setOption={setOption}
        socket={socketConnect}
        session={session}
      />
      <Header />
      <Board session={session} />
      <Footer />
    </div>
  );
}
