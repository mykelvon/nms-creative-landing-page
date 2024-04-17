import React from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";


const DateCalendarUsage = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider>
  );
};

export default DateCalendarUsage;
