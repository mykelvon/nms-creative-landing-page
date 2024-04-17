import React from "react";
import { DataGrid as NMSDataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const DataGrid = ({
  columns,
  density,
  initialState,
  pageSizeOptions,
  rows,
  slots,
  ...props
}) => {
  return (
      <NMSDataGrid
        columns={columns}
        density={density}
        rows={rows}
        initialState={initialState}
        pageSizeOptions={pageSizeOptions}
        slots={slots}
        {...props}
      />
  );
};

DataGrid.propTypes = {
  columns: PropTypes.array.isRequired,
  density: PropTypes.oneOf(["comfortable", "compact", "standard"]),
  rows: PropTypes.arrayOf([PropTypes.object]),
  initialState: PropTypes.object,
  pageSizeOptions: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      }),
    ])
  ),
  slots: PropTypes.object,
  ...NMSDataGrid.PropTypes,
};

DataGrid.defaultProps = {
  density: "compact"
}

export default DataGrid;
