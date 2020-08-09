import { useState } from "react";
import { Row } from "./row";
import { Loadboard } from "../helpers/loadboard";

interface boardProps {
  nValue: Number;
  board: Array<number>;
  moves: boolean;
}

export const Board: React.FC<boardProps> = (boardProps) => {
  const [nValue, setNValue] = useState(8);
  const [board, setBoard] = useState([]);
  const [moves, setMoves] = useState(false);
  const [active, setActive] = useState(2);
  const [previousCell, setPreviousCell] = useState({ i: 0, j: 0 });
  const [highLightCells, setHighLight] = useState([{ i: 0, j: 0 }]);
  const [redScore, setRedScore] = useState(0);
  const [grayScore, setGrayScore] = useState(0);

  moves == false ? Loadboard(board, nValue, setBoard, setMoves) : null;
  // Board Values (Enum model) = {
  //                  0 = white
  //                  1 = black
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
    setBoard([]);
    moves == false ? Loadboard(board, nValue, setBoard, setMoves) : null;
    setActive(2);
  };

  const setPlayer = () => {
    return active == 2 ? "piece red" : active == 3 ? "piece gray" : null;
  };

  return (
    <div>
      <div className={"top"}>
        <div className={"inputBox"}>
          <label htmlFor="nValue"> Select Rows : </label>
          <input
            type="number"
            id="nValue"
            value={nValue}
            onChange={(e) => onChangeHandler(e)}
          ></input>
        </div>
        <div>
          <div className="activePlayer">
            <div className="piece red"></div>
            <h3>
              Score: <br />
              {redScore}
            </h3>
          </div>
          <div className="activePlayer center">
            <p>Next Move :</p>
            <div className={setPlayer()}></div>
          </div>
          <div className="activePlayer">
            <div className="piece gray"></div>
            <h3>
              Score: <br />
              {grayScore}{" "}
            </h3>
          </div>
        </div>
      </div>

      <main className={"board"}>
        {board.map((r, i) => (
          <Row
            key={i}
            i={i}
            n={nValue}
            setBoard={setBoard}
            board={board}
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
