import * as React from "react";
import drop from "../../../assets/img/dropDown.svg";
import S from "./DropDown.module.scss";
import { useRef, useState } from "react";
import DropDownList from "./DropDownList/DropDownList.tsx";

interface IDropDown {
  presumablyTomato: number;
  dropDownAPI: {};
  id: string;
}

const DropDown = (props: IDropDown) => {
  const [coordinate, setCoordinate] = useState({});
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={S.doby}
      onClick={() => {
        if (ref.current) {
          setCoordinate(ref.current.getBoundingClientRect());
        }
        setOpen(!open);
      }}
    >
      <img src={drop} alt="" />
      {open && (
        <DropDownList
          presumablyTomato={props.presumablyTomato}
          coordinate={coordinate}
          dropDownAPI={props.dropDownAPI}
          id={props.id}
        />
      )}
    </div>
  );
};

export default DropDown;
