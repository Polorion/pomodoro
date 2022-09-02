const fromMsToTime = (ms) => {
  return {
    h: parseInt((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    min: parseInt((ms % (1000 * 60 * 60)) / (1000 * 60)),
    s: parseInt((ms % (1000 * 60)) / 1000),
  };
};
export default fromMsToTime;
