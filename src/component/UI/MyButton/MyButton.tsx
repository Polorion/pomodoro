import * as React from "react";
// @ts-ignore
import S from "./MyButton.module.scss";

interface IMyButton {
  title: string;
  stop?: boolean;
  disabled?: boolean;
  hendler?: () => {};
}

const MyButton = (props: IMyButton) => {
  return (
    <button
      onClick={props.hendler && props.hendler}
      className={`${S.button} ${props.stop && S.stop}`}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
};

export default MyButton;