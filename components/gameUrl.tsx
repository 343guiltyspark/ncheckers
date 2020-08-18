interface props {
  session: string;
  gameUrlClass: string;
}

export const GameUrl: React.FC<props> = (props) => {
  return (
    <div className={props.gameUrlClass}>
      <h5 className="urlText">
        Game Url {"\n"} :{" "}
        <b>
          {" "}
          http://reactNCheckers.ernestomaldonado.guru/
          {props.session}{" "}
        </b>
      </h5>
    </div>
  );
};
