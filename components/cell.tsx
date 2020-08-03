import {useState} from 'react';
import { Board } from "./board";

interface props{
  board : Array<any>,
  dup?: Array<any>,
  setBoard: (setBoard)=>void,
  setUnselect: (setUnselect)=>void,
  setBoardHandler: (setUnselect)=>void,
  c:number,
  i:number,
  j:number
}

export const Cell: React.FC<props> = (props) => {

    const [cell,setCell] = useState(props.c);    
    let cName  = (cell==0) ? "cell white" : "cell black" ;
    let pName =     (Math.abs(cell)==2) ? "piece red" :
                    (Math.abs(cell)==3) ? "piece gray" :
                    (Math.abs(cell)==0 || Math.abs(cell)==1) ? "  " : null;
    let selected = (cell == -2 || cell == -3) ? "selected"  : " " ;                

    if(pName == null) {
        throw new Error('pName (className) for piece cannot be null');
    }

    const ClickHandler = () => {        
            let dup = props.board
            props.setBoardHandler(dup)
            dup[props.i][props.j] = props.board[props.i][props.j]*-1; 
            setCell(dup[props.i][props.j]);
            props.setBoard(dup);
    }
                 
    return(
        <div className={cName} onClick={ClickHandler}>
            <div className={pName}>
                <div className={selected} />
            </div>
        </div>
    )
}
