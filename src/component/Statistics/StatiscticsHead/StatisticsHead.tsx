import * as React from "react";
import S from "./../Statistics.module.scss";
import Select from "../../UI/Select/Select.tsx";

interface IStatisticsHead {
  optionSelect: string;
  setActiveTask: (s: string) => {};
}

const StatisticsHead = (props: IStatisticsHead) => {
  const select = (
    <Select
      value={props.optionSelect}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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

export default StatisticsHead;
