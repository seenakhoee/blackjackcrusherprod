import React from 'react';
import { useStopwatch } from 'react-timer-hook';

export const MyStopwatch = () => {
  const {
    seconds,
    minutes,
    hours,
  } = useStopwatch({ autoStart: true });

  const formatSeconds = (seconds) => {
    return (/^\d$/.test(seconds)) ? `0${seconds}` : `${seconds}`;
  }

  const checkTime = (elem) => {
    return elem ? `${elem}:` : '';
  }

  return (
    <>
      <p>Training Duration: {checkTime(hours)}{checkTime(minutes)}{formatSeconds(seconds)}</p>
    </>
  );
}