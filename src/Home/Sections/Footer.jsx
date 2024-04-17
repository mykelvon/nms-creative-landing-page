import { Box, Stack, Typography } from "nms-creative-ui";
import React from "react";
import { useUIStore } from "../../store/store";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { THEME_KEY } from "../../config/enums";

const Footer = () => {
  const [{ theme }] = useUIStore();
  const [, setValueTheme] = useLocalStorage(THEME_KEY, theme);
  return (
    <Box
      sx={{
        backgroundImage:
          theme === "dark"
            ? `url("/images/footer-bg-darkMode.png")`
            : `url("/images/platforms-section-bg.jpg")`,
        backgroundSize: `cover`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        padding: {
          mobile: "48px 16px",
          laptop: "98px 16px",
        },
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <img loading="lazy" src="/logo/nmsLogo.svg" alt="NMS LOGO" />
        <Typography variant="h4" color="primary">
          NMS Creative UI
        </Typography>
        <Typography variant="body1" color="text.main">
          design.nmscreative.com
        </Typography>
        <Typography variant="body1" color="text.main">
          © All rights reserved
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
