export const Loadboard = (
  board: Array<any>,
  nValue: number,
  setBoard: (setBoard) => void,
  setMoves: (setMoves) => void
) => {
  setMoves(true);

  //calculateLimits  (3 : 2 : 3)
  let midRegion = (1 / 4) * nValue;
  let mid =
    Math.floor(midRegion) % 2 == 0
      ? Math.floor(midRegion)
      : Math.floor(midRegion - 1);
  let pieceRegion = (nValue - mid) / 2;

  let i = 0,
    j = 0;
  while (i < nValue) {
    board[i] = [];
    while (j < nValue) {
      board[i][j] = i % 2 == 0 ? j % 2 : (j + 1) % 2; //Set white/black cells
      board[i][j] =
        board[i][j] === 1 && i < pieceRegion
          ? 2
          : i > nValue - pieceRegion - 1 && board[i][j] === 1
          ? 3
          : board[i][j]; //Set initial red  and gray pieces , board value of int 2 or 3 respoectively. ;
      j++;
    }
    j = 0;
    i++;
  }
  console.log(board);
  setBoard(board);
};
