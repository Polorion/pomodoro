import * as React from "react";
import { useEffect } from "react";

const useSetActiveTask = (allTask: any, setActiveTaskThunk: any) => {
  useEffect(() => {
    allTask.length > 0 && setActiveTaskThunk(allTask[0].id);
  }, [allTask.length]);
};

export default useSetActiveTask;
