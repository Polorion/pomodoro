const transormTaskForStatistic = (task) => {
  console.log(task, 1212);
  return {
    timeOfPaused: task.timePaused,
    timeOfWorking: task.allTimeWork,
    allTime: task.timePaused + task.allTimeWork,
    cancel: task.cancel,
    tomato: task.tomato,
  };
};

export default transormTaskForStatistic;
