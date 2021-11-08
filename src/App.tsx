import * as React from "react";
import Box from "@mui/material/Box";
import useAuth from "./hooks/useAuth";
import * as storage from "./utils/storage";
import Container from "@mui/material/Container";
import { Button, Grid, Typography } from "@mui/material";
import useSessionTracker from "./hooks/useSessionTracker";
import WorkSessionStopwatch from "./components/stopwatch/WorkSessionStopwatch";
import WorkBreakOneSessionStopwatch from "./components/stopwatch/WorkBreakOneSessionStopwatch";
import WorkBreakTwoSessionStopwatch from "./components/stopwatch/WorkBreakTwoSessionStopwatch";
import WorkBreakThreeSessionStopwatch from "./components/stopwatch/WorkBreakThreeSessionStopwatch";

export default function App() {
  const { isLoggedIn, login, logout } = useAuth();
  const {
    resetWorkDuration,
    workDuration,
    breakOneDuration,
    breakThreeDuration,
    breakTwoDuration,
    resetBreakDuration,
  } = useSessionTracker();

  return (
    <Container maxWidth={"lg"}>
      {isLoggedIn ? (
        <Box sx={{ my: 4 }}>
          <Grid container spacing={4}>
            <Grid item>
              <Typography variant={"h6"}>Work duration: </Typography>
              <WorkSessionStopwatch />
            </Grid>

            <Grid item>
              <Typography variant={"h6"}>Break duration: </Typography>

              <WorkBreakOneSessionStopwatch />
            </Grid>

            <Grid item>
              <Typography variant={"h6"}>Break duration: </Typography>

              <WorkBreakTwoSessionStopwatch />
            </Grid>

            <Grid item>
              <Typography variant={"h6"}>Break duration: </Typography>

              <WorkBreakThreeSessionStopwatch />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box>
          <Typography>Your total summary: </Typography>

          <Grid container spacing={4}>
            <Grid item>
              <Typography>work:</Typography>
              <Typography variant={"h3"}>
                <span>{workDuration[0]}</span>:<span>{workDuration[1]}</span>:
                <span>{workDuration[2]}</span>:<span>{workDuration[3]}</span>
              </Typography>
            </Grid>

            <Grid item>
              <Typography>break 1:</Typography>
              <Typography variant={"h3"}>
                <span>{breakOneDuration[0]}</span>:
                <span>{breakOneDuration[1]}</span>:
                <span>{breakOneDuration[2]}</span>:
                <span>{breakOneDuration[3]}</span>
              </Typography>
            </Grid>

            <Grid item>
              <Typography>break 2:</Typography>
              <Typography variant={"h3"}>
                <span>{breakTwoDuration[0]}</span>:
                <span>{breakTwoDuration[1]}</span>:
                <span>{breakTwoDuration[2]}</span>:
                <span>{breakTwoDuration[3]}</span>
              </Typography>
            </Grid>

            <Grid item>
              <Typography>break 3:</Typography>
              <Typography variant={"h3"}>
                <span>{breakThreeDuration[0]}</span>:
                <span>{breakThreeDuration[1]}</span>:
                <span>{breakThreeDuration[2]}</span>:
                <span>{breakThreeDuration[3]}</span>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
      <Button onClick={logout}>Logout</Button>
      <Button
        onClick={() => {
          resetWorkDuration();
          resetBreakDuration();
          storage.setItem("break-1-started", false);
          storage.setItem("break-1-finished", false);
          storage.setItem("break-2-started", false);
          storage.setItem("break-2-finished", false);
          storage.setItem("break-3-started", false);
          storage.setItem("break-3-finished", false);
          login();
        }}
      >
        Login
      </Button>
    </Container>
  );
}
