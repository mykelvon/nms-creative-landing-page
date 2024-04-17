import { AppBar as MUIAppBar, styled } from "@mui/material";

const drawerWidth = 248;

export const CustAppBar = styled(MUIAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => {
  return {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  };
});
