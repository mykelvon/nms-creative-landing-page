import React from "react";
import * as SolarIconSet from "solar-icon-set";
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { Button, IconButton, Stack, Typography } from "nms-creative-ui";
import { useUIStore } from "../../store/store";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { THEME_KEY } from "../../config/enums";

const Navbar = () => {
  const [{ theme }, { setTheme }] = useUIStore();
  const [, setValueTheme] = useLocalStorage(THEME_KEY, theme);

  const handleThemeChange = () => {
    const changedTheme = theme === "light" ? "dark" : "light";
    setValueTheme(changedTheme);
    setTheme(changedTheme);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        "&.MuiPaper-elevation4": {
          boxShadow: "none",
          borderRadius: "0px",
        },
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          padding: "24px 0px",
          maxWidth: "1300px",
          width: "100%",
          alignSelf: "center",
        }}
      >
        <Link
          to={"/"}
          style={{ textDecoration: "none" }}
          onClick={handleScrollToTop}
        >
          <Stack direction="row" spacing={2}>
            <img src="/logo/nmsLogo.svg" alt="" />
            <Typography
              variant="h5"
              color="primary"
              sx={{ display: { mobile: "none", tablet: "flex" } }}
            >
              NMS Creative UI
            </Typography>
          </Stack>
        </Link>

        <Stack direction={"row"} spacing={2} alignItems="center">
          <Link to={"/getting-started/introduction"}>
            <Button variant={"text"}>Get Started</Button>
          </Link>

          <IconButton onClick={() => handleThemeChange()}>
            {theme === "light" ? (
              <SolarIconSet.Sun
                iconStyle="BoldDuotone"
                size={24}
                color="#FF4545"
              />
            ) : (
              <SolarIconSet.MoonStars
                iconStyle="BoldDuotone"
                size={24}
                color="#FF4545"
              />
            )}
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
