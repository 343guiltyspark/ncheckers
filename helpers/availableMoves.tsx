import { Unselect } from "../helpers/unselect";

export const AvailableMoves = (dup: Array<any>, i: number, j: number) => {
  let newIL: number;
  let newIH: number;
  let newJL: number;
  let newJH: number;
  let low: number = -1;
  let high: number = 1;
  let cond: boolean = true;
  let oppo: number = dup[i][j] == -2 ? 3 : dup[i][j] == -3 ? 2 : null;

  //Identify type of cell selected
  //If IN {2,3} idenify advanceent direction {- for red, + for gray};
  let dir: number = dup[i][j] == -2 ? 1 : dup[i][j] == -3 ? -1 : 0;
  if (dir == 0) {
    dup = Unselect(dup);
    return dup;
  }
  //identiy boundry cases beyon the board and assign new I row value (var newI)
  //do th same for both new J values (var newJL, and var newJH)

  do {
    newIL = i + dir < 0 || i + dir > dup.length - 1 ? null : i + dir;
    newIH = i + dir < 0 || i + dir > dup.length - 1 ? null : i + dir;
    newJL = j - low < 0 ? null : j - low;
    newJH = j + low > dup[i].length - 1 ? null : j + low;

    cond = false;
  } while (cond);
  //console.log(newI,newJL,newJH);

  //Assign those cells a value of  -1 per board enum
  //checkTo for to see if cells have acceptable value of i
  console.log(newIL, newJL, newIL, newJH);

  if (newIL !== null && newJL !== null) {
    dup[newIL][newJL] = dup[newIL][newJL] == 1 ? -1 : dup[newIL][newJL];
  }

  if (newIH !== null && newJH !== null) {
    dup[newIH][newJH] = dup[newIH][newJH] == 1 ? -1 : dup[newIH][newJH];
  }
  // Return the board state
  return dup;
};
