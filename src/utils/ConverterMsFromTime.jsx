const fromMsToTime = (ms) => {
  let sec = ((ms % (1000 * 60)) / 1000 - parseInt((ms % (1000 * 60)) / 1000))
    .toFixed(2)
    .split(".")[1];

  return {
    min: parseInt((ms % (1000 * 60 * 60)) / (1000 * 60)),
    s: parseInt((ms % (1000 * 60)) / 1000),
  };
};
export default fromMsToTime;
