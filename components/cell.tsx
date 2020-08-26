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
  redScore: number;
  grayScore: number;
  setRedScore: (setRedScore) => void;
  setGrayScore: (setGrayScore) => void;
  io: any;
  session: string;
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
    let prev: any = { ...props.pc };
    if (
      //Enforce player turns and ensure click event only fires for valid Icons
      Math.abs(props.board[props.i][props.j]) === props.active ||
      props.board[props.i][props.j] == -1
    ) {
      let dup = [...props.board];

      // Check if new clicked piece is not clicked and is a valid piece to un selected previously selected pieces.
      dup[prev.i][prev.j] =
        dup[props.i][props.j] === -1 ||
        dup[prev.i][prev.j] === -2 ||
        dup[prev.i][prev.j] === -3
          ? Math.abs(dup[prev.i][prev.j])
          : dup[prev.i][prev.j];

      //Deselect if another cell is clicked
      dup[props.i][props.j] =
        dup[props.i][props.j] !== 1 &&
        dup[props.i][props.j] !== -1 &&
        dup[props.i][props.j] !== 0
          ? Math.abs(props.board[props.i][props.j]) * -1
          : dup[props.i][props.j];

      //Check if cell has valid piece . If it is, then find moves available for that piece and change board to reflect that.
      dup =
        Math.abs(dup[props.i][props.j]) == 2 ||
        Math.abs(dup[props.i][props.j]) == 3
          ? AvailableMoves(dup, props.i, props.j, props.hc, props.sHC)
          : dup;

      //Check clicked cell for piece is same color.
      dup[props.i][props.j] =
        dup[props.i][props.j] == props.active
          ? -1 * dup[props.i][props.j]
          : dup[props.i][props.j];

      //Move piece if selected cell is a valid move.
      dup =
        dup[props.i][props.j] == -1
          ? MovePiece(
              dup,
              props.i,
              props.j,
              props.setActive,
              props.active,
              props.io,
              props.session,
              prev,
              props.hc,
              props.sHC,
              props.redScore,
              props.grayScore,
              props.setRedScore,
              props.setGrayScore
            )
          : dup;

      //Set board state

      props.io.emit("sendGameMove", { session: props.session, gameState: dup });

      props.setBoard([...dup]);
      //set precious click object
      props.sPC([]);

      //Record cell id into previous cell state if cell contains a valid piece.
      Math.abs(dup[props.i][props.j]) == 2 ||
      Math.abs(dup[props.i][props.j]) == 3
        ? props.sPC({ i: props.i, j: props.j })
        : null;
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
