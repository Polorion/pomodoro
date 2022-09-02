import * as React from "react";

const GetDataInArray = (array) => {
  console.log(array, 22);
  const tomato = array.reduce((el, item) => {
    return el + item.tomato;
  }, 0);
  const timeOfPaused = array.reduce((el, item) => {
    return el + item.timeOfPaused;
  }, 0);
  const timeOfWorking = array.reduce((el, item) => {
    return el + item.timeOfWorking;
  }, 0);
  const cancel = array.reduce((el, item) => {
    return el + item.cancel;
  }, 0);
  const focusWork = Math.round(
    100 - (timeOfPaused * 100) / (timeOfWorking + timeOfPaused)
  );
  const allTime = timeOfPaused + timeOfWorking;
  return { tomato, timeOfPaused, timeOfWorking, cancel, focusWork, allTime };
};

export default GetDataInArray;
