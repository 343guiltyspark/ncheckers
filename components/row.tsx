import { Cell } from "./cell";
import { markSelected } from "../helpers/markSelected";

interface props {
  n: number;
  i: number;
  j?: number;
  board: Array<any>;
  dup?: Array<any>;
  setBoard: (setBoard) => void;
  setActive: (setActive) => void;
  active: number;
  pC: Object;
  sPC: (setPreviousCell) => void;
  hc: any;
  sHC: (setHighLighted) => void;
  redScore: number;
  grayScore: number;
  setRedScore: (setRedScore) => void;
  setGrayScore: (setGrayScore) => void;
  io: any;
  session: string;
  me: number;
}

export const Row: React.FC<props> = (props) => {
  return (
    <div style={{ margin: "-6px", padding: "0px", width: 50 * props.n }}>
      {props.board[props.i].map((c, i) => (
        <Cell
          key={i + props.i * i}
          c={c}
          i={props.i}
          j={i}
          board={props.board}
          setBoard={props.setBoard}
          //  setBoardHandler={props.setBoardHandler}
          setActive={props.setActive}
          active={props.active}
          pc={props.pC}
          sPC={props.sPC}
          hc={props.hc}
          sHC={props.sHC}
          redScore={props.redScore}
          grayScore={props.grayScore}
          setRedScore={props.setRedScore}
          setGrayScore={props.setGrayScore}
          io={props.io}
          session={props.session}
          me={props.me}
        />
      ))}
    </div>
  );
};
