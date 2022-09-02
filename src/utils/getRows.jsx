import fromMsToTime from "./ConverterMsFromTime";
const getRows = (allTime) => {
  const oneRowInTime = allTime / 60000 / 25;
  let row = [];
  for (let i = 0; i <= oneRowInTime + 1; ++i) {
    row.unshift({ time: fromMsToTime(i * 60000 * 25) });
  }
  return row;
};

export default getRows;
