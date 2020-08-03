export const markSelected = (board : Array<any>, i : number, j: number, setBoard : (setBoard)=>void) => {
    board[i][j]=board[i][j]*-1
    setBoard([]);
    setBoard(board);
    console.log(board);
}