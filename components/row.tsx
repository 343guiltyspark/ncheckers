import { Cell } from "./cell";
import { markSelected } from "../helpers/markSelected";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

interface props {
  n: number;
  i: number;
  j?: number;
  board: Array<any>;
  dup?: Array<any>;
  setBoard: (setBoard) => void;
  setActive: (setActive) => void;
  active: number;
  // setBoardHandler: (setBoardHandler)=>void,
}

export const Row: React.FC<props> = (props) => {
  return (
    <div
      style={{
        margin: "-5px",
        padding: "0px",
        width: 60 * props.n,
        textAlign: "center",
      }}
    >
      {props.board[props.i].map((c, i) => (
        <Cell
          c={c}
          i={props.i}
          j={i}
          board={props.board}
          setBoard={props.setBoard}
          //  setBoardHandler={props.setBoardHandler}
          setActive={props.setActive}
          active={props.active}
        />
      ))}
    </div>
  );
};
