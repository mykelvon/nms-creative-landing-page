import { Box, Button, Stack, Typography } from "nms-creative-ui";
import { Link } from "react-router-dom";
import {
  BouncingAnimation,
  RotateAnimation,
  ScaleAnimation,
  ScaleRotateAnimation,
} from "../Components/General Components/Animation";
import { useUIStore } from "../../store/store";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { THEME_KEY } from "../../config/enums";

const CtaSection = () => {
  const [{ theme }] = useUIStore();
  const [, setValueTheme] = useLocalStorage(THEME_KEY, theme);
  return (
    <Box
      sx={{
        backgroundImage:
          theme === "dark"
            ? `url("/images/Cta-bg.svg")`
            : `url("/images/cta-bg.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: "500px",
        position: "relative",
        padding: {
          mobile: "50px 16px",
          tablet: "48px 16px",
        },
      }}
    >
      <Stack
       justifyContent="center"
       alignItems="center"
       spacing={3}
      >
        <Typography variant="h2" color="primary">
          Design Beyond Boundaries
        </Typography>
        <Typography
          variant="body1"
          color="text.main"
          sx={{ marginBottom: { mobile: "0px", laptop: "24px" } }}
        >
          Transforming web design with precision-crafted elements.
        </Typography>
        <Button
          component={Link}
          color="primary"
          sx={{ width: { mobile: "100%", tablet: "max-content" } }}
        >
          GET STARTED
        </Button>
        <Box sx={{ position: "absolute", top: "18%", right: "25%" }}>
          <ScaleAnimation />
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: { mobile: "10%", desktop: "20%", largeDesktop: "25%" },
            top: { mobile: "15%", desktop: "30%" },
          }}
        >
          <RotateAnimation />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: { mobile: "25%", desktop: "18%" },
            right: { mobile: "20%", desktop: "30%" },
          }}
        >
          <BouncingAnimation />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "20%",
            left: { mobile: "20%", desktop: "30%" },
          }}
        >
          <ScaleRotateAnimation />
        </Box>
      </Stack>
    </Box>
  );
};

export default CtaSection;
