import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Up } from "../assets/img/up.svg";
import { ReactComponent as Down } from "../assets/img/down.svg";
import { ReactComponent as Edit } from "../assets/img/edit.svg";
import { ReactComponent as Deleted } from "../assets/img/delete.svg";

const UseGetDropDownLiData = (
  setPreTomato: (id: string, pre?: string) => {},
  id: string,
  tomato: number
) => {
  const history = useNavigate();
  const add = () => {
    setPreTomato(id, "add");
  };
  const sub = () => {
    action: setPreTomato(id);
  };
  const editF = () => {
    history(`edit/${id}`);
  };
  const del = () => {
    history(`del/${id}`);
  };
  const disabled = () => {
    if (tomato === 0) {
      return true;
    }
  };
  const Liitem = [
    {
      img: Up,
      title: "Увеличить",
      action: add,
    },
    {
      img: Down,
      title: "Уменьшить",
      action: sub,
      disable: disabled(),
    },
    { img: Edit, title: "Редактировать", action: editF },
    {
      img: Deleted,
      title: "Удалить",
      action: del,
    },
  ];
  return Liitem;
};

export default UseGetDropDownLiData;
