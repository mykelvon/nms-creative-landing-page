import React from "react";
import PropTypes from "prop-types";
import { ToggleButton as NMSToggleButton } from "@mui/material";

const ToggleButton = ({
  children,
  color,
  component,
  href,
  size,
  sx,
  variant,
  value,
  ...props
}) => {
  return (
    <NMSToggleButton
      color={color}
      component={component}
      href={href}
      size={size}
      sx={sx}
      variant={variant}
      value={value}
      {...props}
    >
      {children}
    </NMSToggleButton>
  );
};

ToggleButton.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),
  component: PropTypes.elementType,
  href: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  sx: PropTypes.object,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  value: PropTypes.any,
};

export default ToggleButton;
