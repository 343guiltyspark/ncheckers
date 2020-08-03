export const Unselect = (dup : Array<any>) => {
    dup.map((r,j)=>{
        r.map((e: number,i)=>{
            r[i]=(e<=0) ? Math.abs(e) : e
            dup[j]=r;
        });  
    })
    return dup;
} 