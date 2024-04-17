import React from "react";
import PropTypes from "prop-types";
import { ToggleButtonGroup as NMSToggleButtonGroup } from "@mui/material";

const ToggleButtonGroup = ({
  children,
  exclusive,
  onChange,
  orientation,
  size,
  sx,
  value,
  ...props
}) => {
  return (
    <NMSToggleButtonGroup
      exclusive={exclusive}
      onChange={onChange}
      orientation={orientation}
      size={size}
      sx={sx}
      value={value}
      {...props}
    >
      {children}
    </NMSToggleButtonGroup>
  );
};

ToggleButtonGroup.propTypes = {
  children: PropTypes.node,
  exclusive: PropTypes.bool,
  onChange: PropTypes.func,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  sx: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default ToggleButtonGroup;
