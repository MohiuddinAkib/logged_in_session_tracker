import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import SessionTrackerProvider from "./providers/SessionTrackerProvider";
import App from "./App";
import theme from "./theme";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <AuthProvider>
      <SessionTrackerProvider>
        <App />
      </SessionTrackerProvider>
    </AuthProvider>
  </ThemeProvider>,
  document.querySelector("#root")
);
