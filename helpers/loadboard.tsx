export const Loadboard = (
  board: Array<any>,
  nValue: number,
  setBoard: (setBoard) => void,
  setMoves: (setMoves) => void
) => {
  setMoves(true);
  console.log(nValue);
  const log10 = (x, y) => {
    return Math.log(y) / Math.log(x);
  };

  const buildPArry = (pRegion, nVal) => {
    let val = nVal;
    let exVal = [];
    let mVal;
    console.log(nVal);
    do {
      mVal = Math.floor(log10(2, val));
      exVal.push(mVal);
      val = val - Math.pow(2, mVal);
    } while (val > 0);

    exVal = exVal.reverse();
    let odd = false;
    let i = 0;
    let unit = [0, 1];
    console.log("exval", exVal);
    odd = nVal % 2 === 0 ? false : true;
    exVal[0] == 0 ? exVal.shift() : exVal;
    var arry = new Array();
    arry[0] = unit;
    while (i < exVal.length) {
      arry[i] = i > 0 ? arry[i - 1] : arry[i];
      let initVal = i != 0 ? exVal[i - 1] : 0;
      for (var j = initVal; j < exVal[i]; j++) {
        arry[i] = exVal[i] == 1 || j == 0 ? unit : arry[i].concat(arry[i]);
      }
      i++;
    }
    let row = new Array();
    for (var k = 0; k < arry.length; k++) {
      row = row.concat(arry[k]);
    }
    // console.log(row);
    // console.log(odd);
    //odd == true ? row.shift() : null;
    odd == true ? row.push(0) : null;
    //odd == true ? row.push(1) : null;
    console.log(row);
    let oddRow = new Array();
    oddRow = [...row];
    // oddRow.shift();
    // oddRow.push(0);
    oddRow.shift();
    odd == true ? oddRow.push(1) : oddRow.push(0);

    //odd == true ? oddRow.shift() : null;

    //odd == true ? oddRow.push(1) : null;
    // odd ? oddRow.shift() : null;
    // odd ? row.push(0) : null;

    //oddRow.push(1);
    //console.log(row, oddRow);
    //console.log(nVal);
    for (var n = 0; n < nVal; n++) {
      // console.log(n % 2);
      board[n] = n % 2 == 0 ? row : oddRow;
    }
  };

  //calculateLimits  (3 : 2 : 3)
  let midRegion = (1 / 4) * nValue;
  let mid =
    Math.floor(midRegion) % 2 == 0
      ? Math.floor(midRegion)
      : Math.floor(midRegion - 1);
  let pieceRegion = (nValue - mid) / 2;

  buildPArry(pieceRegion, nValue);

  // // expected output: 4
  // let val = 585

  // let e = getBaseLog(2,val);
  // let r = Math.floor(e);
  // let n = Math.pow(2,r)
  // let m = val - n

  // let i = getBaseLog(2,m);
  // let j = Math.floor(i);
  // let k = Math.pow(2,j);
  // let l = m - k;

  // let a = getBaseLog(2,l);
  // let b = Math.floor(a);
  // let d = Math.pow(2,b);
  // let f = l - d;

  // let g = getBaseLog(2,f);
  // let h = Math.floor(g);
  // let o = Math.pow(2,h);
  // let p = f - o;

  // let i = 0,
  //   j = 0;
  // while (i < nValue) {
  //   board[i] = [];
  //   while (j < nValue) {
  //     board[i][j] = i % 2 == 0 ? j % 2 : (j + 1) % 2; //Set white/black cells
  //     board[i][j] =
  //       board[i][j] === 1 && i < pieceRegion
  //         ? 2
  //         : i > nValue - pieceRegion - 1 && board[i][j] === 1
  //         ? 3
  //         : board[i][j]; //Set initial red  and gray pieces , board value of int 2 or 3 respoectively. ;
  //     j++;
  //   }
  //   j = 0;
  //   i++;
  // }
  console.log(board);
  setBoard(board);
};
