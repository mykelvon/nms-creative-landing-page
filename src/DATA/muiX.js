import Basic from "../Home/Components/MUIX/Data Grid/Basic";
import Custom from "../Home/Components/MUIX/Data Grid/Custom";
import DateCalendarUsage from "../Home/Components/MUIX/DataTimePicker/DateCalendarUsage";
import TimeClockUsage from "../Home/Components/MUIX/DataTimePicker/TimeClockUsage";

const MUIX = [
    {
      id: 1,
      name: "Data Grid",
      first_value: "1",
      second_value: "2",
      label: ["Basic", "Custom"],
      component: [Basic, Custom]
    },
    {
      id: 2,
      name: "Date Time Picker",
      first_value: "1",
      second_value: "2",
      label: ["Time Clock", "Calendar"],
      component: [TimeClockUsage, DateCalendarUsage]
    },
  ];
  
  export default MUIX;
  