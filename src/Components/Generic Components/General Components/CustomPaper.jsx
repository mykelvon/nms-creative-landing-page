import { Paper } from "nms-creative-ui";
import React from "react";
import { useUIStore } from "../../../store/store";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { THEME_KEY } from "../../../config/enums";

const CustomPaper = ({ children }) => {
  const [{ theme }] = useUIStore();
  const [, setValueTheme] = useLocalStorage(THEME_KEY, theme);
  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "20px",
        border: "1px dashed #919EAB40",
        backgroundColor: theme === "dark" ? "transparent" : "#FBFBFC",
        height: "100%",
        gap: "24px",
        padding: "24px",
        boxShadow: "none",
        backgroundImage: theme === "dark" ? 'none' : 'url("/images/CardBg.png")',
      }}
    >
      {children}
    </Paper>
  );
};

export default CustomPaper;
