import * as React from "react";

interface IRangeInput {
  title: string;
  action: (e: string) => {};
  value: number;
}

const RangeInput = (props: IRangeInput) => {
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.action(e.target.value);
  };
  return (
    <label>
      <p>{props.title}</p>
      <input
        min="1"
        max="100"
        onInput={handler}
        value={props.value}
        type="range"
      />
      <div>{props.value}</div>
      <p>минут</p>
    </label>
  );
};

export default RangeInput;
