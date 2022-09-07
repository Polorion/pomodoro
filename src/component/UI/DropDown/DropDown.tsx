import * as React from "react";
import drop from "../../../assets/img/dropDown.svg";
import S from "./DropDown.module.scss";
import DropItem from "./DropDownList/DropItem/DropItem.tsx";
import ReactDOM from "react-dom";
import { useEffect, useRef, useState } from "react";
import DropDownList from "./DropDownList/DropDownList.tsx";

interface IDropDown {
  presumablyTomato: number;
  dropDownAPI: {};
  id: string;
}

const DropDown = (props: IDropDown) => {
  const [coordinat, setCoordinats] = useState({});
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={S.doby}
      onClick={() => {
        if (ref.current) {
          setCoordinats(ref.current.getBoundingClientRect());
        }
        setOpen(!open);
      }}
    >
      <img src={drop} alt="" />
      {open && (
        <DropDownList
          presumablyTomato={props.presumablyTomato}
          coordinat={coordinat}
          dropDownAPI={props.dropDownAPI}
          id={props.id}
        />
      )}
    </div>
  );
};

export default DropDown;
