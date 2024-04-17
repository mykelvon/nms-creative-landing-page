import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, TimeClock } from "@mui/x-date-pickers";

import React from "react";

const TimeClockUsage = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimeClock />
    </LocalizationProvider>
  );
};

export default TimeClockUsage;
