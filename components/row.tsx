import {Cell} from "./cell";
import {Loadboard} from "../helpers/loadboard"
import { Board } from "./board";

interface props{
  n:number,
  i:number,
  board: Array<any>,
  tempArray: Array<number>,
  setBoard: (setBoard)=>void,
  moves: number
}

export const Row: React.FC<props> = (props) => {
 
return(
      <div style={{margin:"-5px",padding:"0px"}}>
        {props.board[props.i].map(r=>(<Cell c={r}/>))}
      </div>
    )
}
