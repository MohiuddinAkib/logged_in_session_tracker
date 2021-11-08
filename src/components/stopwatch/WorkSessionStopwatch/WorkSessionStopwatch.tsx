import React from "react";
import dayjs from "dayjs";
import { Typography } from "@mui/material";
import { useStopwatch } from "react-timer-hook";
import useSessionTracker from "../../../hooks/useSessionTracker";

const WorkSessionStopwatch = () => {
  const { updateWorkSession, workDuration } = useSessionTracker();

  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({
      autoStart: true,
      offsetTimestamp: dayjs()
        .add(workDuration[0], "d")
        .add(workDuration[1], "h")
        .add(workDuration[2], "m")
        .add(workDuration[3], "s")
        .toDate(),
    });

  React.useEffect(() => {
    updateWorkSession(days, hours, minutes, seconds);
  }, [seconds, minutes, hours, days]);

  return (
    <div>
      <Typography variant={"h3"}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </Typography>
    </div>
  );
};

export default WorkSessionStopwatch;
