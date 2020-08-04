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
  //If IN {2,3} idenify advancement direction {- for red, + for gray};
  let dir: number = dup[i][j] == -2 ? 1 : dup[i][j] == -3 ? -1 : 0;
  if (dir == 0) {
    dup = Unselect(dup);
    return dup;
  }
  //identiy boundry cases beyon the board and assign new I row value (var newI)
  //do th same for both new J values (var newJL, and var newJH)
  let dirJH: number = dir;
  let dirJL: number = dir;
  let count: number = 1;
  let cond1: boolean = false;
  let cond2: boolean = false;
  //console.log(i, j);
  do {
    newIL = i + dirJL < 0 || i + dirJL > dup.length - 1 ? null : i + dirJL;
    newIH = i + dirJH < 0 || i + dirJH > dup.length - 1 ? null : i + dirJH;
    newJL = j + low < 0 ? null : j + low;
    newJH = j + high > dup[i].length - 1 ? null : j + high;

    count++;

    //console.log(newIL, newJL, newIH, newJH);
    dirJL = dup[newIL][newJL] == oppo ? dir * count : dirJL;
    dirJH = dup[newIH][newJH] == oppo ? dir * count : dirJH;
    low = dup[newIL][newJL] == oppo ? low * count : low;
    high = dup[newIH][newJH] == oppo ? high * count : high;

    //console.log(dirJL, dirJH, low, high);
  } while (count <= 2);

  //Assign those cells a value of  -1 per board enum
  //checkTo for to see if cells have acceptable value of i
  //console.log(newIL, newJL, newIH, newJH);

  if (newIL !== null && newJL !== null) {
    console.log("JL");
    dup[newIL][newJL] = dup[newIL][newJL] == 1 ? -1 : dup[newIL][newJL];
  }

  if (newIL !== null && newJH !== null) {
    console.log("JH");
    dup[newIH][newJH] = dup[newIH][newJH] == 1 ? -1 : dup[newIH][newJH];
  }
  // Return the board state
  return dup;
};
