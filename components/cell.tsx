import { Unselect } from "../helpers/unselect";
import { AvailableMoves } from "../helpers/availableMoves";

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
    dup = Unselect(dup);
    dup[props.i][props.j] =
      dup[props.i][props.j] !== 1
        ? props.board[props.i][props.j] * -1
        : dup[props.i][props.j];
    dup = AvailableMoves(dup, props.i, props.j);
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
