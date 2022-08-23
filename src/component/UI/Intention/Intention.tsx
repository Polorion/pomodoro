import * as React from "react";
// @ts-ignore
import S from "./Intention.module.scss";

// @ts-ignore
import DropDown from "../DropDown/DropDown.tsx";
import { useEffect, useRef, useState } from "react";
import { setActiveTaskThunk } from "../../../store/MainReducer";
interface IIntention {
  title: string;
  count: number;
  id: string;
  setActiveTaskThunk: any;
  coordinats: {};
  activeTask: string;
  stopTimer: () => {};
  addMinute: () => {};
  dropDownAPI: {};
}

const Intention = (props: IIntention) => {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className={`${S.body} ${props.id === props.activeTask && S.active}`}
    >
      <div
        onClick={() => {
          props.stopTimer();
          props.setActiveTaskThunk(props.id);
        }}
        className={S.left}
      >
        <div className={S.count}>{props.count}</div>
        <div className={S.title}>{props.title}</div>
      </div>
      <DropDown dropDownAPI={props.dropDownAPI} id={props.id} />
    </div>
  );
};

export default Intention;
