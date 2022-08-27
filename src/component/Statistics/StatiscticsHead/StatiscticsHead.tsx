import * as React from "react";
// @ts-ignore
import S from "./../Statistics.module.scss";
// @ts-ignore
import Select from "../../UI/Select/Select.tsx";

const StatiscticsHead = (props) => {
  const select = (
    <Select
      value={props.optionSelect}
      onChange={(e) => {
        props.setActiveTask(e.target.value);
      }}
      options={[
        {
          text: "Эта неделя",
          value: 1,
        },
        {
          text: "Прошлая неделя",
          value: 2,
        },
        {
          text: "2 недели назад",
          value: 3,
        },
      ]}
    />
  );
  return (
    <div className={S.header}>
      <h2>Ваша активность</h2>
      {select}
    </div>
  );
};

export default StatiscticsHead;
