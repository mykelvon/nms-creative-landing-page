import { Box, Stack, Tab, Typography } from "nms-creative-ui";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { useUIStore } from "../../../store/store";
import { THEME_KEY } from "../../../config/enums";

const CustomTab = ({ title, description, icon, isSelected, ...props }) => {
  const [{ theme }] = useUIStore();
  const [, setValueTheme] = useLocalStorage(THEME_KEY, theme);
  return (
    <Tab
      sx={{
        width:"300px",
        minWidth: {
          tablet: "300px",
          desktop:"100%",
        },
        margin: {
          mobile: "0px 12px 12px 0px",
          desktop: "0px 0px 24px 0px",
        },
      }}
      {...props}
      label={
        <Box
          sx={{
            padding: "24px",
            borderRadius: "12px",
            border: "1px solid #919EAB25",
            display: "flex",
            alignItems: { mobile: "start", desktop: "center" },
            flexDirection: { mobile: "column", desktop: "row" },
            gap: "24px",
            minHeight: "100%",
            backgroundColor: isSelected ? "#FF4545" : "transparent",
            color: isSelected ? "#fff" : "#454F5B" && theme ==="dark" ? "#ffffff" : "#454F5B" 
          }}
        >
          <Box sx={{ color: isSelected ? "#ffffff" : "#FF4545" }}>{icon}</Box>
          <Stack
           textAlign="left"
           spacing={2}
          >
            <Typography
              variant="h4"
              sx={{
                textTransform: "capitalize",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              
              sx={{
                textTransform: "capitalize",
              }}
            >
              {description}
            </Typography>
          </Stack>
        </Box>
      }
    />
  );
};


export default CustomTab;
