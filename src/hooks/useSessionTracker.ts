import React from "react";
import { SesstionTrackerContext } from "../providers/SessionTrackerProvider";

const useSessionTracker = () => React.useContext(SesstionTrackerContext);

export default useSessionTracker;
