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
  // const SetBoardHandler = (dup) => {
  //     // Resets all selected units to unselected.
  //     dup = Unselect(dup);
  //     setBoard(dup);
  //     console.log(board);
  // }

  return (
    <main className={"board"}>
      {board.map((r, i) => (
        <Row
          i={i}
          n={nValue}
          setBoard={setBoard}
          //  setBoardHandler={SetBoardHandler}
          board={board}
        />
      ))}
    </main>
  );
};
