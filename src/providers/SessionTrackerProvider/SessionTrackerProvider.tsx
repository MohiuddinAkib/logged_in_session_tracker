import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export const SesstionTrackerContext = React.createContext({
  workDuration: [0, 0, 0, 0],
  breakOneDuration: [0, 0, 0, 0],
  breakTwoDuration: [0, 0, 0, 0],
  breakThreeDuration: [0, 0, 0, 0],
  updateWorkSession: (
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  ) => {},
  removeWorkDuration: () => {},
  resetWorkDuration: () => {},
  updateBreakOneSession: (
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  ) => {},
  updateBreakTwoSession: (
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  ) => {},
  updateBreakThreeSession: (
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  ) => {},
  resetBreakDuration: () => {},
});

export enum SessionKeys {
  WORK_DURATION = "work-duration",
  BREAK_ONE = "break-1",
  BREAK_TWO = "break-2",
  BREAK_THREE = "break-3",
}

const SessionTrackerProvider: React.FC = (props) => {
  const {
    set,
    remove,
    value: workDuration,
  } = useLocalStorage(SessionKeys.WORK_DURATION, [0, 0, 0, 0]);

  const { set: setBreakSessionOne, value: breakOneDuration } = useLocalStorage(
    SessionKeys.BREAK_ONE,
    [0, 0, 0, 0]
  );
  const { set: setBreakSessionTwo, value: breakTwoDuration } = useLocalStorage(
    SessionKeys.BREAK_TWO,
    [0, 0, 0, 0]
  );
  const { set: setBreakSessionThree, value: breakThreeDuration } =
    useLocalStorage(SessionKeys.BREAK_THREE, [0, 0, 0, 0]);

  const updateWorkSession = (
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  ) => {
    set([days, hours, minutes, seconds]);
  };

  const updateBreakOneSession = (
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  ) => {
    setBreakSessionOne([days, hours, minutes, seconds]);
  };

  const updateBreakTwoSession = (
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  ) => {
    setBreakSessionTwo([days, hours, minutes, seconds]);
  };

  const updateBreakThreeSession = (
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  ) => {
    setBreakSessionThree([days, hours, minutes, seconds]);
  };

  const removeWorkDuration = () => remove();

  const resetWorkDuration = () => set([0, 0, 0, 0]);

  const resetBreakDuration = () => {
    setBreakSessionOne([0, 0, 0, 0]);
    setBreakSessionTwo([0, 0, 0, 0]);
    setBreakSessionThree([0, 0, 0, 0]);
  };

  return (
    <SesstionTrackerContext.Provider
      value={{
        workDuration,
        breakOneDuration,
        breakTwoDuration,
        breakThreeDuration,
        updateWorkSession,
        removeWorkDuration,
        resetWorkDuration,
        resetBreakDuration,
        updateBreakOneSession,
        updateBreakTwoSession,
        updateBreakThreeSession,
      }}
    >
      {props.children}
    </SesstionTrackerContext.Provider>
  );
};

export default SessionTrackerProvider;
