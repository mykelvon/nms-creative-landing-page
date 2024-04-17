import React from "react";
import { CardContent as NMSCardContent } from "@mui/material";
import PropTypes from "prop-types";

const CardContent = ({ children, component, sx, ...props }) => {
  return (
    <NMSCardContent component={component} sx={sx} {...props}>
      {children}
    </NMSCardContent>
  );
};

CardContent.propTypes = {
  children: PropTypes.node,
  component: PropTypes.elementType,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  ...NMSCardContent.PropTypes,
};

export default CardContent;
