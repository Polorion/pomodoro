import * as React from "react";
import S from "./NightOrDay.module.scss";

interface INightOrDay {
  setNightOrDay: () => {};
  nightOrDay: boolean;
}

const NightOrDay = (props: INightOrDay) => {
  const handler = () => {
    props.setNightOrDay();
  };

  return (
    <div className={S.body} onClick={handler}>
      <div
        className={`${S.circle} ${props.nightOrDay ? S.day : S.night}`}
      ></div>
    </div>
  );
};

export default NightOrDay;
