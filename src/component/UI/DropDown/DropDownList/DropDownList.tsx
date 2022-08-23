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
// @ts-ignore
import up from "../../../../assets/img/up.svg";
// @ts-ignore
import down from "../../../../assets/img/down.svg";
// @ts-ignore
import edit from "../../../../assets/img/edit.svg";
// @ts-ignore
import deleted from "../../../../assets/img/delete.svg";

import GeneratorRandomString from "../../../../utils/GeneratorRandomString";
import { addTomato, subTomato } from "../../../../store/MainReducer";
interface IDropDownList {
  coordinat: {
    y: number;
    x: number;
  };
  dropDownAPI: {
    addTomato: () => {};
    subTomato: () => {};
    deleteTask: () => {};
  };
  id: string;
}

const DropDownList = (props: IDropDownList) => {
  const Liitem = [
    {
      img: up,
      title: "Увеличить",
      action: props.dropDownAPI.addTomato,
      link: false,
    },
    {
      img: down,
      title: "Уменьшить",
      action: props.dropDownAPI.subTomato,
      link: false,
    },
    { img: edit, title: "Редактировать", link: true },
    {
      img: deleted,
      title: "Удалить",
      action: props.dropDownAPI.deleteTask,
      link: false,
    },
  ];
  const ref = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (ref.current !== null) {
      ref.current.style.top = props.coordinat.y + 35 + window.scrollY + "px";
      ref.current.style.left = props.coordinat.x - 87 + "px";
      ref.current.style.position = "absolute";
    }
  }, []);
  const node = document.querySelector("#dropDown");
  if (!node) return null;
  return ReactDOM.createPortal(
    <ul className={S.dropList} ref={ref}>
      {Liitem.map((el) => {
        return (
          <DropItem
            key={GeneratorRandomString()}
            img={el.img}
            title={el.title}
            action={el.action}
            id={props.id}
            link={el.link}
          />
        );
      })}
    </ul>,
    node
  );
};

export default DropDownList;
