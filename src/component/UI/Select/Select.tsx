import * as React from "react";

const Select = (props) => {
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
