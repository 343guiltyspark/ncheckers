export const Loadboard = (board : Array<any>,nValue : number, setBoard : (setBoard)=>void, setMoves : (setMoves)=>void) => {
    setMoves(true)
    let i = 0;
    let j = 0;
    while(i<nValue){
        board[i]=[]
        while(j<nValue){
            board[i][j] = (i % 2 == 0)  ? j % 2 : (j+1) % 2; //Set white/black cells
            board[i][j] = (board[i][j]===1 && (i<3)) ? 2 : board[i][j]; //Set initial red cells , board value of int 2 ;
            board[i][j] = (i>(nValue-4) && board[i][j]===1) ? 3 : board[i][j];  //set initial gray cells, board value of 3; 
            j++
        }
        j = 0; 
        i++
    }
    console.log(board);
    setBoard(board);
}