import { Stack, Switch, Typography } from "nms-creative-ui";
import { useUIStore } from "../../store/store";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { THEME_KEY } from "../../config/enums";
import CustomDivider from "../../Components/Generic Components/General Components/CustomDivider";

const ThemeSection = () => {
  const [{ theme }, { setTheme }] = useUIStore();
  const [, setValueTheme] = useLocalStorage(THEME_KEY, theme);

  const handleThemeChange = () => {
    const changedTheme = theme === "light" ? "dark" : "light";
    setValueTheme(changedTheme);
    setTheme(changedTheme);
  };

  const imageSource =
    theme === "dark"
      ? "/images/Theme Dashboard Dark.jpg"
      : "/images/Theme Dashboard.jpg";

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={3}
      sx={{
        textAlign: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundImage:
          theme === "dark"
            ? 'url("/images/themeSectionBg-Dark.png")'
            : 'url("/images/featuresbg-light.png")',
        padding: {
          mobile: "50px 16px",
          tablet: "48px 16px",
        },
      }}
    >
      <Stack justifyContent="center" alignItems="center" spacing={1}>
        <Typography variant="h4" color="text.main">
          Theme
        </Typography>
        <Typography variant="h2" color="primary">
          Flexible theme customization
        </Typography>
        <CustomDivider />
      </Stack>
      <Typography variant="body1" color="text.main">
        Dive into the night with our UI Library's sleek Dark Mode, offering a
        stylish interface for a visually enhanced experience. Elevate your
        design aesthetics effortlessly.
      </Typography>
      <Switch
        color="primary"
        checked={theme === "dark"}
        onChange={handleThemeChange}
        inputProps={{ "aria-label": "Enable Dark Mode" }}
        label="Enable Dark Mode"
        labelPlacement="left"
      />
      <img
        loading="lazy"
        src={imageSource}
        alt="theme dashboard"
        style={{ width: "100%", maxWidth: "1100px", borderRadius: "12px" }}
      />
    </Stack>
  );
};

export default ThemeSection;
