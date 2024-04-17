import React, { useEffect } from "react";
import { ThemeProvider as NMSThemeProvider } from "@mui/material";
import { lightTheme } from "./light"; // Import your light theme
import { darkTheme } from "./dark"; // Import your dark theme
import useStore from "../../store/store";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { THEME_KEY } from "../../config/enums";

const ThemeProvider = ({ children }) => {
  const [{ theme }, actions] = useStore();
  const [defaultTheme] = useLocalStorage(
    THEME_KEY,
    window.matchMedia("(prefers-color-scheme: light)").matches ? "dark" : "light"
  );
  useEffect(() => {
    actions.setTheme(defaultTheme);
  }, [actions, defaultTheme]);
  return (
    <NMSThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      {children}
    </NMSThemeProvider>
  );
};
export default ThemeProvider;
 