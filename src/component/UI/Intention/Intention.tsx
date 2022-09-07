import * as React from "react";
import S from "./Intention.module.scss";

import DropDown from "../DropDown/DropDown.tsx";
import { useEffect, useRef } from "react";
interface IIntention {
  nightOrDay: boolean;
  title: string;
  count: number;
  id: string;
  presumablyTomato: number;
  setActiveTaskThunk: any;
  coordinats: {};
  activeTask: string;
  stopTimer: () => {};
  addMinute: () => {};
  dropDownAPI: {};
  setCountItem: (count: number, id: string) => {};
  allTask: any;
}

const Intention = (props: IIntention) => {
  useEffect(() => {
    props.setCountItem(props.count, props.id);
  }, [props.allTask.length]);
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
        <div className={`${S.count} ${props.nightOrDay ? S.day : S.night}`}>
          {props.presumablyTomato}
        </div>
        <div className={`${S.title} ${props.nightOrDay ? S.day : S.night}`}>
          {props.title}
        </div>
      </div>
      <DropDown
        dropDownAPI={props.dropDownAPI}
        id={props.id}
        presumablyTomato={props.presumablyTomato}
      />
    </div>
  );
};

export default Intention;
