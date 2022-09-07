import * as React from "react";

interface ISelect {
  label: string;
  value: string;
  onChange: () => {};
  options: [
    {
      value: string;
      text: string;
    }
  ];
}

const Select = (props: ISelect) => {
  return (
    <div>
      <label>
        {props.label}
        <select value={props.value} onChange={props.onChange}>
          {props.options.map((el) => {
            return (
              <option key={el.value + Math.random()} value={el.value}>
                {el.text}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default Select;
