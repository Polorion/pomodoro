import * as React from "react";
import { useEffect } from "react";
import fromMsToTime from "../utils/ConverterMsFromTime";
const useGetTimeBottomForm = (allTask: any, setPreTimeTomato: any) => {
  useEffect(() => {
    const timeOfWorking = allTask.reduce((el: any, item: any) => {
      return el + item.presumablyTomato;
    }, 0);
    setPreTimeTomato(fromMsToTime(timeOfWorking * 15 * 60000));
  }, [allTask]);
};

export default useGetTimeBottomForm;
