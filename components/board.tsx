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
  io: any;
  session: string;
  active: number;
  setActive: (setActive) => void;
  me: number;
  redScore: number;
  grayScore: number;
  setRedScore: (setRedScore) => void;
  setGrayScore: (setGrayScore) => void;
}

export const Board: React.FC<boardProps> = (boardProps) => {
  const [nValue, setNValue] = useState(8);
  //const [board, setBoard] = useState([]);
  const [moves, setMoves] = useState(false);
  const [previousCell, setPreviousCell] = useState({ i: 0, j: 0 });
  const [highLightCells, setHighLight] = useState([{ i: 0, j: 0 }]);

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
    boardProps.setActive(2);
  };

  const setPlayer = () => {
    return boardProps.active == 2
      ? "piece red"
      : boardProps.active == 3
      ? "piece gray"
      : null;
  };

  return (
    <div>
      <div className={"top"}>
        <InputBox nValue={nValue} onChangeHandler={onChangeHandler} />
        <div className="scoreBoardRow">
          <ScoreBoardCell
            scoreType={boardProps.redScore}
            cName={"activePlayer"}
            typeCName={"piece red"}
          />

          <InformationCell
            gameStatus={boardProps.standBy}
            setPlayer={setPlayer()}
          />
          <ScoreBoardCell
            scoreType={boardProps.grayScore}
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
            setActive={boardProps.setActive}
            active={boardProps.active}
            pC={previousCell}
            sPC={setPreviousCell}
            hc={highLightCells}
            sHC={setHighLight}
            redScore={boardProps.redScore}
            setRedScore={boardProps.setRedScore}
            grayScore={boardProps.grayScore}
            setGrayScore={boardProps.setGrayScore}
            io={boardProps.io}
            session={boardProps.session}
            me={boardProps.me}
          />
        ))}
      </main>
    </div>
  );
};
