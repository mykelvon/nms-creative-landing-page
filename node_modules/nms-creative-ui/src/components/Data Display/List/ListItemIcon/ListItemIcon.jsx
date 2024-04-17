import React from "react";
import { ListItemIcon as NMSListItemIcon } from "@mui/material";
import PropTypes from "prop-types";
import * as SolarIconSet from "solar-icon-set";

const ListItemIcon = ({ children, sx, ...props }) => {
  return (
    <NMSListItemIcon sx={sx} {...props}>
      {children}
    </NMSListItemIcon>
  );
};

ListItemIcon.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  ...NMSListItemIcon.PropTypes,
};

ListItemIcon.defaultProps = {
  children: <SolarIconSet.BoxMinimalistic size={24} iconStyle="BoldDuotone" />,
};

export default ListItemIcon;
