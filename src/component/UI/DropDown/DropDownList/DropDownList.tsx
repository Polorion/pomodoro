import * as React from "react";
import DropItem from "./DropItem/DropItem.tsx";
import ReactDOM from "react-dom";
import S from "../DropDown.module.scss";
import { useEffect, useRef } from "react";

import GeneratorRandomString from "../../../../utils/GeneratorRandomString";
import UseGetDropDownLiData from "../../../../hooks/useGetDropDownLiData.tsx";
interface IDropDownList {
  presumablyTomato: number;
  coordinate: {
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
      ref.current.style.top = props.coordinate.y + 35 + window.scrollY + "px";
      ref.current.style.left = props.coordinate.x - 80 + "px";
      ref.current.style.position = "absolute";
    }
  }, []);
  const node = document.querySelector("#dropDown");
  if (!node) return null;
  return ReactDOM.createPortal(
    <ul className={S.dropList} ref={ref}>
      {liItem.map(
        (el: { img: any; title: string; action: string; disable: boolean }) => {
          return (
            <DropItem
              key={GeneratorRandomString()}
              img={el.img}
              title={el.title}
              action={el.action}
              disable={el.disable}
            />
          );
        }
      )}
    </ul>,
    node
  );
};

export default DropDownList;
