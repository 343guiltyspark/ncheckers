import { useState } from "react";
import { Row } from "./row";
import { Loadboard } from "../helpers/loadboard";
import { InputBox } from "./inputBox";
import { ScoreBoardCell } from "./scoreBoardCell";
import { InformationCell } from "./informationCell";

interface boardProps {
  nValue: Number;
  board: Array<number>;
  moves: boolean;
  standBy: string;
  setStandBy: (setStandBy) => void;
  setBoard: (setBoard) => void;
}

export const Board: React.FC<boardProps> = (boardProps) => {
  const [nValue, setNValue] = useState(8);
  //const [board, setBoard] = useState([]);
  const [moves, setMoves] = useState(false);
  const [active, setActive] = useState(2);
  const [previousCell, setPreviousCell] = useState({ i: 0, j: 0 });
  const [highLightCells, setHighLight] = useState([{ i: 0, j: 0 }]);
  const [redScore, setRedScore] = useState(0);
  const [grayScore, setGrayScore] = useState(0);

  moves == false
    ? Loadboard(boardProps.board, nValue, boardProps.setBoard, setMoves)
    : null;
  // Board Values (Enum model) = {
  //                  0 = white cell
  //                  1 = black cell
  //                  2 = red piece on black cell
  //                  3 = white piece on black cell
  //                  Any negatvie multiple is a selected piece
  //                  -1 = possible movement cell of selected piece
  //                  -2 = selected red piece
  //                  -3 = selected gray piece
  //                         }
  const onChangeHandler = (e) => {
    setMoves(false);

    setNValue(e.target.value);
    console.log(nValue);
    boardProps.setBoard([]);
    moves == false
      ? Loadboard(boardProps.board, nValue, boardProps.setBoard, setMoves)
      : null;
    setActive(2);
  };

  const setPlayer = () => {
    return active == 2 ? "piece red" : active == 3 ? "piece gray" : null;
  };

  return (
    <div>
      <div className={"top"}>
        <InputBox nValue={nValue} onChangeHandler={onChangeHandler} />
        <div className="scoreBoardRow">
          <ScoreBoardCell
            scoreType={redScore}
            cName={"activePlayer"}
            typeCName={"piece red"}
          />

          <InformationCell
            gameStatus={boardProps.standBy}
            setPlayer={setPlayer()}
          />
          <ScoreBoardCell
            scoreType={grayScore}
            cName={"activePlayer"}
            typeCName={"piece gray"}
          />
        </div>
      </div>

      <main className={"board"}>
        {boardProps.board.map((r, i) => (
          <Row
            key={i}
            i={i}
            n={nValue}
            setBoard={boardProps.setBoard}
            board={boardProps.board}
            setActive={setActive}
            active={active}
            pC={previousCell}
            sPC={setPreviousCell}
            hc={highLightCells}
            sHC={setHighLight}
            redScore={redScore}
            setRedScore={setRedScore}
            grayScore={grayScore}
            setGrayScore={setGrayScore}
          />
        ))}
      </main>
    </div>
  );
};
