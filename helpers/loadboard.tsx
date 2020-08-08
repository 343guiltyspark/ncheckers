export const Loadboard = (
  board: Array<any>,
  nValue: number,
  setBoard: (setBoard) => void,
  setMoves: (setMoves) => void
) => {
  setMoves(true);
  const log10 = (x, y) => {
    return Math.log(y) / Math.log(x);
  };

  const buildPArry = (pRegion, nVal) => {
    let val = nVal;
    let exVal = [];
    let mVal;
    do {
      mVal = Math.floor(log10(2, val));
      exVal.push(mVal);
      val = val - Math.pow(2, mVal);
    } while (val > 0);

    exVal = exVal.reverse();
    let odd = false;
    let i = 0;
    let unitB = [0, 1];
    let unitR = [0, 2];
    let unitG = [0, 3];
    odd = nVal % 2 === 0 ? false : true;
    exVal[0] == 0 ? exVal.shift() : exVal;
    var arryB = new Array();
    var arryR = new Array();
    var arryG = new Array();
    arryB[0] = unitB;
    arryR[0] = unitR;
    arryG[0] = unitG;
    while (i < exVal.length) {
      arryB[i] = i > 0 ? arryB[i - 1] : arryB[i];
      arryR[i] = i > 0 ? arryR[i - 1] : arryR[i];
      arryG[i] = i > 0 ? arryG[i - 1] : arryG[i];

      let initVal = i != 0 ? exVal[i - 1] : 0;

      for (var j = initVal; j < exVal[i]; j++) {
        arryB[i] = exVal[i] == 1 || j == 0 ? unitB : arryB[i].concat(arryB[i]);
        arryR[i] = exVal[i] == 1 || j == 0 ? unitR : arryR[i].concat(arryR[i]);
        arryG[i] = exVal[i] == 1 || j == 0 ? unitG : arryG[i].concat(arryG[i]);
      }

      i++;
    }

    let rowB = new Array();
    let rowR = new Array();
    let rowG = new Array();
    for (var k = 0; k < arryB.length; k++) {
      rowB = rowB.concat(arryB[k]);
      rowR = rowR.concat(arryR[k]);
      rowG = rowG.concat(arryG[k]);
    }

    odd == true ? rowB.push(0) : null;
    odd == true ? rowR.push(0) : null;
    odd == true ? rowG.push(0) : null;

    //odd == true ? row.push(1) : null;
    let oddRowB = new Array();
    let oddRowR = new Array();
    let oddRowG = new Array();

    oddRowB = [...rowB];
    oddRowR = [...rowR];
    oddRowG = [...rowG];

    oddRowB.shift();
    oddRowR.shift();
    oddRowG.shift();

    odd == true ? oddRowB.push(1) : oddRowB.push(0);
    odd == true ? oddRowR.push(2) : oddRowR.push(0);
    odd == true ? oddRowG.push(3) : oddRowG.push(0);
    if (nVal == 1) {
      board[n - 1] = rowB;
    } else {
      for (var n = 0; n < pRegion; n++) {
        board[n] = n % 2 == 0 ? [...rowR] : [...oddRowR];
      }

      for (var o = n; o < nVal - pRegion; o++) {
        board[o] = o % 2 == 0 ? [...rowB] : [...oddRowB];
      }

      for (var m = o; m < nVal; m++) {
        board[m] = m % 2 == 0 ? [...rowG] : [...oddRowG];
      }
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
  setBoard(board);
};
