interface props {
  scoreType: number; // red or gray score
  cName: string; //class name for wrapper
  typeCName: string; // class name for icon type
  textBox: string;
}

export const ScoreBoardCell: React.FC<props> = (props) => {
  return (
    <div className={props.cName}>
      <div className={props.typeCName}></div>
      <h3>
        Score: <br />
        {props.scoreType}
      </h3>
      <p style={{ fontSize: ".8rem" }}>
        <b>{props.textBox}</b>
      </p>
    </div>
  );
};
