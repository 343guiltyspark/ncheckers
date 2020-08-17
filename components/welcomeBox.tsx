import { useState } from "react";
import { url } from "../helpers/url";

interface props {
  option: number;
  session: string;
  setOption: (setOption) => void;
  socket: (socket) => void;
}
export const WelcomeBox: React.FC<props> = (props) => {
  const [welcomBoxClass, setWBClass] = useState("welcomeBox");
  const [gameUrlClass, setGameUrlClass] = useState("gameUrlBarInit");

  const RadioButtonOnChange = (e) => {
    props.setOption(e.target.value);
  };

  const GameSelectHandler = (e) => {
    e.preventDefault();
    document.getElementById("gameSelect").remove();

    if (e.target.gameType.value == 2) {
      url("post", "/gameType", { session: props.session, type: 2 });
      props.socket();
    } else if (e.target.gameType.value == 1) {
      url("post", "/gameType", { session: props.session, type: 1 });
    }

    setWBClass("welcomeBoxSelected");
    setGameUrlClass("gameUrlBar");
  };

  return (
    <div className={welcomBoxClass}>
      <div className={gameUrlClass}>
        <h5 className="urlText">
          Game Url {"\n"} :{" "}
          <b>
            {" "}
            http://reactNCheckers.ernestomaldonado.guru/
            {props.session}{" "}
          </b>
        </h5>
      </div>

      <div>
        <form
          id="gameSelect"
          className="gameSelectForm"
          onSubmit={(e) => GameSelectHandler(e)}
        >
          <label
            htmlFor="gameType"
            style={{
              paddingBottom: "1rem",
            }}
          >
            {" "}
            Welcome! Please choose your game type:
          </label>

          <div>
            <input
              type="radio"
              name="gameType"
              value="1"
              id="single"
              checked={props.option == 1}
              onChange={RadioButtonOnChange}
            />
            <label htmlFor="single">Single Device Game for two players</label>
          </div>
          <div>
            <input
              type="radio"
              name="gameType"
              value="2"
              id="dual"
              checked={props.option == 2}
              onChange={RadioButtonOnChange}
            />
            <label htmlFor="dual">
              Multi-device game for two players.
              <br />
              {"\t"} Players must share url links{" "}
            </label>
          </div>
          <div className={"submitButton"}>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
