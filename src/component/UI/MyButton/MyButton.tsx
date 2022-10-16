import * as React from "react";
import S from "./MyButton.module.scss";

interface IMyButton {
  title: string;
  stop?: boolean;
  disabled?: boolean;
  handler?: () => {};
}

const MyButton = (props: IMyButton) => {
  return (
    <button
      onClick={props.handler && props.handler}
      className={`${S.button} ${props.stop && S.stop} ${
        props.disabled && S.disabled
      } `}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
};

export default MyButton;
