import { Unselect } from "../helpers/unselect";

export const MovePiece = (
  dup: Array<any>,
  i: number,
  j: number,
  setActive: (setActive) => void,
  active: number
) => {
  let newI: number = i;
  let newJ: number = j;
  let selected: number;
  let sL: any = false; // selected piece location [i,j];
  let eye: number;
  let jay: number;

  //Find selected piece
  dup.map((r, k) => {
    r.map((e: number, l: number) => {
      if (e == -2 || e == -3) {
        sL = [k, l];
        k = dup.length;
        l = dup.length;
      }
    });
  });
  console.log(dup);
  console.log(sL);
  if (sL == false) {
    return dup;
  } else {
    eye = sL[0];
    jay = sL[1];
    selected = dup[eye][jay];
  }

  // check to see if space is eligble for move and then move;
  if (dup[newI][newJ] == -1) {
    console.log(dup);
    dup[newI][newJ] = Math.abs(selected);
    dup[sL[0]][sL[1]] = 1;
    // will propbablay put consume piece here later
    //console.log(eye, i); =

    let posJ: number;
    let posI: number;
    let deltaJ: number;
    let deltaI: number;
    if (Math.abs(eye - i) == 2) {
      deltaI = (i - eye) / 2;
      deltaJ = (j - jay) / 2;
      console.log(i, j);
      console.log(deltaI, deltaJ);
      posI = i - deltaI;
      posJ = j - deltaJ;

      console.log(posI, posJ);
      dup[posI][posJ] = 1;
    }

    // @ ^^^^^^^^^^^^^^^^
    dup = Unselect(dup);
    let aDup = active == 2 ? 3 : 2;
    setActive(aDup);
  }

  return dup;
};
