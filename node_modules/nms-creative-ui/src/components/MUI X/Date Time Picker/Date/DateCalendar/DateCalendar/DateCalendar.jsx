import React from "react";
import { DateCalendar as NMSDateCalendar } from "@mui/x-date-pickers";
import PropTypes from "prop-types";

const DateCalendar = ({
  dayOfWeekFormatter,
  defaultValue,
  fixedWeekNumber,
  loading,
  onChange,
  onMonthChange,
  onViewChange,
  onYearChange,
  openTo,
  referenceDate,
  renderLoading,
  slotProps,
  slots,
  sx,
  timezone,
  value,
  view,
  views,
  ...props
}) => {
  return (
    <NMSDateCalendar
      dayOfWeekFormatter={dayOfWeekFormatter}
      defaultValue={defaultValue}
      fixedWeekNumber={fixedWeekNumber}
      loading={loading}
      onChange={onChange}
      onMonthChange={onMonthChange}
      onViewChange={onViewChange}
      onYearChange={onYearChange}
      openTo={openTo}
      referenceDate={referenceDate}
      renderLoading={renderLoading}
      slotProps={slotProps}
      slots={slots}
      sx={sx}
      timezone={timezone}
      value={value}
      view={view}
      views={views}
      {...props}
    />
  );
};

DateCalendar.propTypes = {
  dayOfWeekFormatter: PropTypes.func,
  defaultValue: PropTypes.any,
  fixedWeekNumber: PropTypes.number,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  onMonthChange: PropTypes.func,
  onViewChange: PropTypes.func,
  onYearChange: PropTypes.func,
  openTo: PropTypes.oneOf(["day", "month", "year"]),
  referenceDate: PropTypes.any,
  renderLoading: PropTypes.func,
  slotProps: PropTypes.object,
  slots: PropTypes.object,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  timezone: PropTypes.string,
  value: PropTypes.any,
  view: PropTypes.arrayOf(["day", "month", "year"]),
  views: PropTypes.arrayOf(["day", "month", "year"]),
  ...NMSDateCalendar.PropTypes,
};

export default DateCalendar;
