import { Unselect } from "../helpers/unselect";
import { AvailableMoves } from "../helpers/availableMoves";
import { MovePiece } from "../helpers/movePiece";

interface props {
  board?: Array<any>;
  dup?: Array<any>;
  setBoard?: (setBoard) => void;
  setActive: (setActive) => void;
  setUnselect?: (setUnselect) => void;
  // setBoardHandler: (setBoardHandler)=>void,
  c: number;
  i: number;
  j: number;
  active: number;
  pc: Object;
  sPC: (setPreviousCell) => void;
  hc: any;
  sHC: (setHighLighted) => void;
}

export const Cell: React.FC<props> = (props) => {
  //const [cell,setCell] = useState(props.c)
  //console.log(props.board);
  let cell = props.c;

  let cName =
    cell == 0 ? "cell white" : cell == -1 ? "cell available" : "cell black";

  let pName =
    Math.abs(cell) == 2
      ? "piece red"
      : Math.abs(cell) == 3
      ? "piece gray"
      : Math.abs(cell) == 0 || Math.abs(cell) == 1
      ? "  "
      : null;

  let selected =
    cell == -2 || cell == -3 ? "selected" : cell == -1 ? "available " : "";

  if (pName == null) {
    throw new Error("pName (className) for piece cannot be null");
  }

  const ClickHandler = () => {
    let prev = { ...props.pc };
    if (
      props.board[props.i][props.j] == props.active ||
      props.board[props.i][props.j] == -1
    ) {
      console.log(props.board);
      let dup = [...props.board];
      dup[prev.i][prev.j] =
        dup[props.i][props.j] >= 0
          ? Math.abs(dup[prev.i][prev.j])
          : dup[prev.i][prev.j];
      console.log(dup);
      dup[props.i][props.j] =
        dup[props.i][props.j] !== 1 &&
        dup[props.i][props.j] !== -1 &&
        dup[props.i][props.j] !== 0
          ? props.board[props.i][props.j] * -1
          : dup[props.i][props.j];
      dup =
        dup[props.i][props.j] == -2 || dup[props.i][props.j] == -3
          ? AvailableMoves(dup, props.i, props.j, props.hc, props.sHC)
          : dup;

      dup =
        dup[props.i][props.j] == -1
          ? MovePiece(
              dup,
              props.i,
              props.j,
              props.setActive,
              props.active,
              prev,
              props.hc,
              props.sHC
            )
          : dup;

      props.setBoard([...dup]);
      props.sPC([]);
      props.sPC({ i: props.i, j: props.j });
    }
  };

  return (
    <div className={cName} onClick={ClickHandler}>
      <div className={pName}>
        <div className={selected} />
      </div>
    </div>
  );
};
