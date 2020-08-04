import { Unselect } from "../helpers/unselect";
import { AvailableMoves } from "../helpers/availableMoves";
import { MovePiece } from "../helpers/MovePiece";

interface props {
  board?: Array<any>;
  dup?: Array<any>;
  setBoard?: (setBoard) => void;
  setUnselect?: (setUnselect) => void;
  // setBoardHandler: (setBoardHandler)=>void,
  c: number;
  i: number;
  j: number;
}

export const Cell: React.FC<props> = (props) => {
  //const [cell,setCell] = useState(props.c)
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
    let dup = [...props.board];
    dup = dup[props.i][props.j] >= 0 ? Unselect(dup) : dup;
    dup[props.i][props.j] =
      dup[props.i][props.j] !== 1 &&
      dup[props.i][props.j] !== -1 &&
      dup[props.i][props.j] !== 0
        ? props.board[props.i][props.j] * -1
        : dup[props.i][props.j];

    dup =
      dup[props.i][props.j] == -2 || dup[props.i][props.j] == -3
        ? AvailableMoves(dup, props.i, props.j)
        : dup;

    console.log(dup[props.i][props.j]);
    dup = dup[props.i][props.j] == -1 ? MovePiece(dup, props.i, props.j) : dup;

    props.setBoard([...dup]);
    console.log(props.board);
  };

  return (
    <div className={cName} onClick={ClickHandler}>
      <div className={pName}>
        <div className={selected} />
      </div>
    </div>
  );
};
