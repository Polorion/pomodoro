import * as React from "react";
import S from "../../DropDown.module.scss";

interface IDropItem {
  disable: boolean;
  img: string;
  title: string;
  action: () => {};
  id: string;
  upOrDown: string;
  link: string;
}

const DropItem = (props: IDropItem) => {
  const liClick = () => {
    !props.disable && props.action();
  };

  return (
    <>
      <li
        onClick={liClick}
        className={`${S.item} ${props.disable && S.disabled}`}
      >
        <div className={S.img}>
          <props.img />
        </div>
        <div className={S.title}>{props.title}</div>
      </li>
    </>
  );
};

export default DropItem;
