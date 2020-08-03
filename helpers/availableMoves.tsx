export const AvailableMoves = (dup : Array<any>, i: number,j: number) => {
    let newI  : number
    let newJL : number
    let newJH : number

    //Identify type of cell selected
    //If IN {2,3} idenify advanceent direction {- for red, + for gray};
    let dir :number  = (dup[i][j] == -2) ? 1 : (dup[i][j]==-3) ? -1 : 0;
    if(dir == 0){
        return dup;
    }
    //identiy boundry cases beyon the board and assign new I row value (var newI)
    //do th same for both new J values (var newJL, and var newJH)
    newI  = (i + dir < 0 || i+dir > (dup.length-1) ) ? null : i+dir;
    newJL = (j - 1 < 0) ? null : j-1;
    newJH = (j+1 > dup[i].length-1) ? null : j+1;
    //console.log(newI,newJL,newJH);

    //Assign those cells a value of  -1 per board enum 
    //checkTo for to see if cells have acceptable value of i 
    dup[newI][newJL] = ((dup[newI][newJL]) == 1 )  ? -1 : dup[newI][newJL] ;
    dup[newI][newJH] = ((dup[newI][newJH]) == 1 )  ? -1 : dup[newI][newJH] ;
      
    // Return the board state
    return dup;
} 