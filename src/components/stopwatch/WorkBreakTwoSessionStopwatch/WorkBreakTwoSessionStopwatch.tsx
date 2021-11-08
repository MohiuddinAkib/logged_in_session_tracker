import dayjs from "dayjs";
import React from "react";
import { Box } from "@mui/system";
import { useStopwatch } from "react-timer-hook";
import { Button, Typography } from "@mui/material";
import useLocalStorage from "../../../hooks/useLocalStorage";
import useSessionTracker from "../../../hooks/useSessionTracker";

interface IProps {}

const breakNumber = 2;

const WorkBreakTwoSessionStopwatch: React.FC<IProps> = () => {
  const { breakTwoDuration, updateBreakTwoSession } = useSessionTracker();
  const { set: setBreakStarted, value: breakStarted } = useLocalStorage(
    `break-${breakNumber}-started`,
    false
  );
  const { set: setBreakFinished, value: breakFinished } = useLocalStorage(
    `break-${breakNumber}-finished`,
    false
  );

  const { seconds, minutes, hours, days, isRunning, start, pause } =
    useStopwatch({
      autoStart: false,
      offsetTimestamp: dayjs()
        .add(breakTwoDuration[0], "d")
        .add(breakTwoDuration[1], "h")
        .add(breakTwoDuration[2], "m")
        .add(breakTwoDuration[3], "s")
        .toDate(),
    });

  React.useEffect(() => {
    updateBreakTwoSession(days, hours, minutes, seconds);
  }, [seconds, minutes, hours, days]);

  React.useEffect(() => {
    if (breakStarted && !breakFinished && !isRunning) {
      start();
    }
  }, [breakStarted, breakFinished, isRunning, start]);

  return (
    <div>
      <Typography variant={"h3"}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </Typography>

      <Box mb={4} />

      {!isRunning ? (
        !breakFinished && (
          <Button
            onClick={() => {
              start();
              setBreakStarted(true);
            }}
            disableElevation
            color={"primary"}
            variant={"contained"}
          >
            Take break #{breakNumber}
          </Button>
        )
      ) : (
        <Button
          onClick={() => {
            pause();
            setBreakFinished(true);
          }}
          color={"primary"}
          disableElevation
          variant={"contained"}
        >
          Stop break #{breakNumber}
        </Button>
      )}
    </div>
  );
};

export default WorkBreakTwoSessionStopwatch;
