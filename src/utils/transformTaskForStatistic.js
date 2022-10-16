const transformTaskForStatistic = (task) => {
  return {
    timeOfPaused: task.timePaused,
    timeOfWorking: task.allTimeWork,
    allTime: task.timePaused + task.allTimeWork,
    cancel: task.cancel,
    tomato: task.tomato,
  };
};

export default transformTaskForStatistic;
