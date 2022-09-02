import * as React from "react";
// @ts-ignore
import DropItem from "./DropItem/DropItem.tsx";
// @ts-ignore
import drop from "../../../../assets/img/dropDown.svg";
// @ts-ignore
import ReactDOM from "react-dom";
// @ts-ignore
import S from "../DropDown.module.scss";
import { useEffect, useRef } from "react";

import GeneratorRandomString from "../../../../utils/GeneratorRandomString";
import { addTomato, subTomato } from "../../../../store/MainReducer";
// @ts-ignore
import Del from "../../../../HOC/dropdown/Del.tsx";
// @ts-ignore
import UseGetDropDownLiData from "../../../../hooks/useGetDropDownLiData.tsx";
interface IDropDownList {
  presumablyTomato: number;
  coordinat: {
    y: number;
    x: number;
  };
  dropDownAPI: {
    setPreTomato: (id: string, add?: string) => {};

    deleteTask: () => {};
  };
  id: string;
}

const DropDownList = (props: IDropDownList) => {
  const ref = useRef<HTMLUListElement>(null);
  const liItem = UseGetDropDownLiData(
    props.dropDownAPI.setPreTomato,
    props.id,
    props.presumablyTomato
  );
  useEffect(() => {
    if (ref.current !== null) {
      ref.current.style.top = props.coordinat.y + 35 + window.scrollY + "px";
      ref.current.style.left = props.coordinat.x - 80 + "px";
      ref.current.style.position = "absolute";
    }
  }, []);
  const node = document.querySelector("#dropDown");
  if (!node) return null;
  return ReactDOM.createPortal(
    <ul className={S.dropList} ref={ref}>
      {liItem.map((el) => {
        return (
          <DropItem
            key={GeneratorRandomString()}
            img={el.img}
            title={el.title}
            action={el.action}
            disable={el.disable}
          />
        );
      })}
    </ul>,
    node
  );
};

export default DropDownList;
