import * as React from "react";
import { useEffect, useState } from "react";
import GetDataInArray from "../utils/GetDataInArray";
import fromMsToTime from "../utils/ConverterMsFromTime";

const useGetInfoTask = (obj) => {
  const [data, setData] = useState();
  const [max, setMax] = useState();

  useEffect(() => {
    const allDay = Object.entries(obj);
    const dayData: any = allDay.map((el) => {
      const infoTask = GetDataInArray(el[1]);
      return {
        text: el[0],
        ...infoTask,
        allTime: {
          h: fromMsToTime(infoTask.allTime).h,
          min: fromMsToTime(infoTask.allTime).min,
          s: fromMsToTime(infoTask.allTime).s,
          allSec: infoTask.allTime,
        },
        timeOfPaused: {
          h: fromMsToTime(infoTask.timeOfPaused).h,
          min: fromMsToTime(infoTask.timeOfPaused).min,
          s: fromMsToTime(infoTask.timeOfPaused).s,
        },
        timeOfWorking: {
          h: fromMsToTime(infoTask.timeOfWorking).h,
          min: fromMsToTime(infoTask.timeOfWorking).min,
          s: fromMsToTime(infoTask.timeOfWorking).s,
        },
      };
    });
    let max = dayData.reduce((acc, curr) =>
      acc.allTime.allSec > curr.allTime.allSec ? acc : curr
    );
    setData(dayData);
    setMax(max);
  }, []);
  return [data, max];
};

export default useGetInfoTask;
