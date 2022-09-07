import { useEffect, useRef, useState } from "react";

function useInterval(
  interval: any,
  savedInterval: string,
  nameInterval: string,
  callback: () => {},
  time: number,
  condition: { time: number },
  action: (t: boolean) => {}
) {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const tick = () => {
    ref.current();
  };

  const start = () => {
    if (condition.time > 0) {
      action && action(true);
      interval(setInterval(tick, time), nameInterval);
    }
  };
  const stop = () => {
    action && action(false);
    clearInterval(savedInterval);
  };
  return [start, stop];
}

export default useInterval;
