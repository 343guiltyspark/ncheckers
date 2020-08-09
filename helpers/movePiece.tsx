import { Unselect } from "../helpers/unselect";

export const MovePiece = (
  dup: Array<any>,
  i: number,
  j: number,
  setActive: (setActive) => void,
  active: number,
  prev?: any,
  hc?: any,
  sHC?: (setHightLight) => void,
  redScore?: number,
  grayScore?: number,
  setRedScore?: (setRedScore) => void,
  setGrayScore?: (setGrayScore) => void
) => {
  let newI: number = i;
  let newJ: number = j;
  let selected: number;
  let sL: any = false; // selected piece location [i,j];
  let eye: number;
  let jay: number;

  console.log("MovePiece");
  //Find selected piece
  sL = prev ? [prev.i, prev.j] : false;
  if (sL == false) {
    return dup;
  } else {
    eye = sL[0];
    jay = sL[1];
    selected = dup[eye][jay];
  }

  // check to see if space is eligble for move and then move;
  if (dup[newI][newJ] == -1) {
    //Move piece to selected cell ;
    dup[newI][newJ] = Math.abs(selected);
    dup[sL[0]][sL[1]] = 1;

    // Check to see if a move is a consumption move,
    //if it is, identify target and change cell value to 1

    let posJ: number;
    let posI: number;
    let deltaJ: number;
    let deltaI: number;
    if (Math.abs(eye - i) == 2) {
      deltaI = (i - eye) / 2;
      deltaJ = (j - jay) / 2;
      posI = i - deltaI;
      posJ = j - deltaJ;
      dup[posI][posJ] = 1;

      //trackscore counter
      Math.abs(dup[i][j]) == 2
        ? setRedScore(redScore + 1)
        : Math.abs(dup[i][j]) == 3
        ? setGrayScore(grayScore + 1)
        : null;
    }

    // @ ^^^^^^^^^^^^^^^^
    //Clear out existing highlighted cell/pice
    dup[prev.i][prev.j] =
      dup[prev.i][prev.j] < 0 && dup[i][j] != dup[prev.i][prev.j]
        ? Math.abs(dup[prev.i][prev.j])
        : dup[prev.i][prev.j];
    hc.map((e) => (dup[e.i][e.j] = Math.abs(dup[e.i][e.j])));
    sHC([{ i: 0, j: 0 }]);

    //Change Player turn once a move has been completed.
    let aDup = active == 2 ? 3 : 2;
    setActive(aDup);
  }

  return dup;
};
