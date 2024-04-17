import { Button, Icon, Menu, MenuItem } from "nms-creative-ui";
import React, { Fragment } from "react";
import * as SolarIconSet from "solar-icon-set";


const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        id="basic-button"
        variant="contained"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Icon
            solariconset={SolarIconSet.User}
            size={24}
            iconStyle={"BoldDuotone"}
          />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Icon
            solariconset={SolarIconSet.UsersGroupTwoRounded}
            size={24}
            iconStyle={"BoldDuotone"}
          />
          My account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Icon
            solariconset={SolarIconSet.Logout3}
            size={24}
            iconStyle={"BoldDuotone"}
          />
          Logout
        </MenuItem>
      </Menu>
      <Button
        id="basic-button"
        variant="text"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disablePadding={true}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Icon
            solariconset={SolarIconSet.User}
            size={24}
            iconStyle={"BoldDuotone"}
          />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Icon
            solariconset={SolarIconSet.UsersGroupTwoRounded}
            size={24}
            iconStyle={"BoldDuotone"}
          />
          My account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Icon
            solariconset={SolarIconSet.Logout3}
            size={24}
            iconStyle={"BoldDuotone"}
          />
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default BasicMenu;
