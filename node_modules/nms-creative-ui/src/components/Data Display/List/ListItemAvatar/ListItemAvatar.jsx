import React from "react";
import { ListItemAvatar as NMSListItemAvatar } from "@mui/material";
import PropTypes from "prop-types";

const ListItemAvatar = ({ children, sx, ...props }) => {
  return (
    <NMSListItemAvatar sx={sx} {...props}>
      {children}
    </NMSListItemAvatar>
  );
};

ListItemAvatar.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
    PropTypes.bool,
  ]),
  ...NMSListItemAvatar.PropTypes,
};

ListItemAvatar.default = {
  children: "NMS ListItemAvatar",
};

export default ListItemAvatar;
