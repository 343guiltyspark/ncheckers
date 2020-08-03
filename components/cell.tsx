interface props{
  c:number,
}

export const Cell: React.FC<props> = (props) => {
    
    let cName  = (props.c==0) ? "cell white" : "cell black" ;
    let pName =     (Math.abs(props.c)==2) ? "piece red" :
                    (Math.abs(props.c)==3) ? "piece gray" :
                    (Math.abs(props.c)==0 || Math.abs(props.c)==1) ? "  " : null;
    let selected = (props.c == -2 || props.c == -3) ? "selected"  : " " ;                

    if(pName == null) {
        throw new Error('pName (className) for piece cannot be null');
    }
                 
    return(
        <div className={cName}>
            <div className={pName}>
                <div className={selected} />
            </div>
        </div>
    )
}
