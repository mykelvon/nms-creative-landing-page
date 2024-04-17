import { Box, Card, Stack, Typography } from "nms-creative-ui";
import React from "react";
import { useUIStore } from "../../store/store";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { THEME_KEY } from "../../config/enums";
import Marquee from "react-fast-marquee";
import PLATFORMS from "../../DATA/platforms";

const SupportedPlatformSection = () => {
  const [{ theme }] = useUIStore();
  const [, setValueTheme] = useLocalStorage(THEME_KEY, theme);
  return (
    <Stack
      alignItems="center"
      spacing={5}
      sx={{
        overflow: "hidden",
        backgroundImage:
          theme === "dark"
            ? 'url("/images/platforms-section-bg-dark.jpg")'
            : 'url("/images/platforms-section-bg.jpg")',
        backgroundSize: `cover`,
        backgroundRepeat: "no-repeat",
        padding: {
          mobile: "50px 0px",
          tablet: "48px 0px",
        },
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{
          textAlign: "center",
          padding: { mobile: "0px 16px", tablet: "0px" },
        }}
      >
        <Typography variant="h4" color="text.main">
          Suggested Platforms
        </Typography>
        <Typography variant="body1" color="text.main">
          Unleash creativity by exploring a wealth of features that revolve
          around an extensive library of design elements and components.
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        sx={{
          display: { mobile: "none", desktop: "flex" },
        }}
      >
        {PLATFORMS.map((item, index) => (
          <Card key={index} sx={{ maxWidth: "max-content" }}>
            <Stack
              sx={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                padding: "24px",
              }}
            >
              <img
                loading="lazy"
                src={item.imageSource}
                alt={item.alt}
                style={{ width: "50px" }}
              />
              <Typography variant="h6" component="div">
                {item.name}
              </Typography>
              <Typography variant="body1">{item.description}</Typography>
            </Stack>
          </Card>
        ))}
      </Stack>
      <Box
        sx={{ display: { mobile: "block", desktop: "none" }, width: "1000px" }}
      >
        <Marquee direction="right">
          <Stack direction="row" spacing={4}>
            {PLATFORMS.map((item, index) => (
              <Card key={index} sx={{ maxWidth: "max-content", marginRight: "48px" }}>
                <Stack
                  sx={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                    padding: "24px",
                  }}
                >
                  <img
                    loading="lazy"
                    src={item.imageSource}
                    alt={item.alt}
                    style={{ width: "50px" }}
                  />
                  <Typography variant="h6" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </Stack>
              </Card>
            ))}
          </Stack>
        </Marquee>
      </Box>
    </Stack>
  );
};
export default SupportedPlatformSection;
