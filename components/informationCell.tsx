interface props {
  gameStatus: string; // GameStatus
  setPlayer: string;
}

export const InformationCell: React.FC<props> = (props) => {
  let gameClass;
  console.log(props.gameStatus);
  if (props.gameStatus == "inPlay") {
    gameClass = "activePlayer center";

    return (
      <div className={gameClass}>
        <h3>Next Move</h3>
        <div className={props.setPlayer}></div>
      </div>
    );
  } else if (props.gameStatus == "waiting") {
    gameClass = "activePlayer center waiting";
    return (
      <div className={gameClass}>
        <div className="blinking">
          <h3>Waiting for second player</h3>
        </div>
      </div>
    );
  }
};
