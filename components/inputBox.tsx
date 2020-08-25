interface props {
  nValue: number;
  onChangeHandler: (onChangeHandler) => void;
}

export const InputBox: React.FC<props> = (props) => {
  return (
    <div className={"inputBox"}>
      <label htmlFor="nValue"> Select Rows : </label>
      <input
        type="number"
        id="nValue"
        value={props.nValue}
        onChange={(e) => props.onChangeHandler(e)}
      ></input>
    </div>
  );
};
