import { Unselect } from "../helpers/unselect";

export const MovePiece = (dup: Array<any>, i: number, j: number) => {
  let newI: number = i;
  let newJ: number = j;
  let selected: number;
  let sL: any = false; // selected piece location [i,j]

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
    let eye = sL[0];
    let jay = sL[1];
    selected = dup[eye][jay];
  }

  // check to see if space is eligble for move and then move;
  if (dup[newI][newJ] == -1) {
    console.log(dup);
    dup[newI][newJ] = Math.abs(selected);
    dup[sL[0]][sL[1]] = 1;
    // will propbablay put consume piece here later
    dup = Unselect(dup);
    // @ ^^^^^^^^^^^^^^^^
  }

  return dup;
};
