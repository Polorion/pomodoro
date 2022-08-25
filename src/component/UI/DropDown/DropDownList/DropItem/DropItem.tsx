import * as React from "react";
// @ts-ignore
import S from "../../DropDown.module.scss";
import { useEffect, useRef } from "react";
// @ts-ignore
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface IDropItem {
  img: string;
  title: string;
  action: (id: string) => {};
  id: string;
  link: string;
}

const DropItem = (props: IDropItem) => {
  const liClick = () => {
    props.action && props.action(props.id);
    if (props.link) {
      props.link && props.title === "Редактировать"
        ? props.link && histori(`edit/${props.id}`)
        : histori(`del/${props.id}`);
    }
  };

  const histori = useNavigate();
  return (
    <>
      <li onClick={liClick} className={S.item}>
        <div className={S.img}>
          <img src={props.img} alt="" />
        </div>
        <div className={S.title}>{props.title}</div>
      </li>
    </>
  );
};

export default DropItem;
