import React from "react";
import ReactDOM from "react-dom/client";
import { Icon } from "nms-creative-ui";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as SolarIconSet from "solar-icon-set";
import { SnackbarProvider } from "notistack";
import { CssBaseline } from "@mui/material";
import ThemeProvider from "./Components/theme/ThemeProvider";
import HomePage from "./Home/HomePage";

const Index = () => {
  return (
    <ThemeProvider>  
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider
      iconVariant={{
        success: (
          <Icon sx={{ marginRight: "8px" }}>
            <SolarIconSet.DangerCircle iconStyle="BoldDuotone" size={24} />
          </Icon>
        ),
        error: (
          <Icon sx={{ marginRight: "8px" }}>
            <SolarIconSet.DangerCircle iconStyle="BoldDuotone" size={24} />
          </Icon>
        ),

        info: (
          <Icon sx={{ marginRight: "8px" }}>
            <SolarIconSet.InfoSquare iconStyle="BoldDuotone" size={24} />
          </Icon>
        ),
        warning: (
          <Icon sx={{ marginRight: "8px" }}>
            <SolarIconSet.DangerTriangle iconStyle="BoldDuotone" size={24} />
          </Icon>
        ),
      }}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Index />
    </SnackbarProvider>
  </React.StrictMode>
);
