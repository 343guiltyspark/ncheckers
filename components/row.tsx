import {Cell} from "./cell";
import { markSelected } from "../helpers/markSelected";

interface props{
  n:number,
  i:number,
  j:number
  board: Array<any>,
  dup?: Array<any>,
  tempArray: Array<number>,
  setBoard: (setBoard)=>void,
  setBoardHandler: (setBoardHandler)=>void,
}

export const Row: React.FC<props> = (props) => {

  const setBoardHandler = () =>{
    
  }

  return(
      <div style={{margin:"-5px",padding:"0px"}}>
        {props.board[props.i].map((c,i)=>(<Cell c={c}
                                            i={props.i} 
                                            j={i} 
                                            board={props.board} 
                                            setBoard={props.setBoard}
                                            setUnselect={setBoardHandler} />))}
      </div>
    )
}
