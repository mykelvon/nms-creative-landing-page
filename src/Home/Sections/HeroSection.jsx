import {
  Avatar,
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  Icon,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Pagination,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "nms-creative-ui";
import { Fragment, useState } from "react";
import * as SolarIconSet from "solar-icon-set";
import CopyToClipboard from "react-copy-to-clipboard";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import ToggleButtonGroup from "../../Components/Input/ToggleButton/ToggleButtonGroup/ToggleButtonGroup";
import ToggleButton from "../../Components/Input/ToggleButton/ToggleButton/ToggleButton";
import { useSnackbar } from "notistack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DiscreteSliderLabel from "../../Components/Generic Components/CustSlider";
import { useUIStore } from "../../store/store";
import { THEME_KEY } from "../../config/enums";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [value, setValue] = useState(0);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [{ theme }] = useUIStore();
  const [, setValueTheme] = useLocalStorage(THEME_KEY, theme);

  const handleCopyToClipboard = () => {
    enqueueSnackbar("Copied to Clipboard!", {
      variant: "info",
      autoHideDuration: 3000,

      action: (key) => (
        <IconButton
          color="info"
          size="medium"
          aria-label="close"
          severity="info"
          onClick={() => closeSnackbar(key)}
        >
          <SolarIconSet.CloseCircle fontSize={24} />
        </IconButton>
      ),
      icon: (
        <Icon color="success">
          <SolarIconSet.InfoSquare size={24} iconStyle="BoldDuotone" />
        </Icon>
      ),
      style: {
        backgroundColor: "#CBFEFA",
        color: "#0090CB",
      },
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Box
      loading="lazy"
      sx={{
        height: { mobile: "100%", desktop: "100vh" },
        paddingTop: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          theme === "dark"
            ? 'url("/images/bgHero.png")'
            : 'url("/images/Hero-bg.jpg")',
        backgroundSize: `cover`,
        backgroundRepeat: "no-repeat",
        padding: {
          mobile: "150px 16px",
          tablet: "200px 16px",
          desktop: "",
        },
      }}
    >
      <Grid
        container
        maxWidth="1300px"
        sx={{
          display: "flex",
          flexDirection: { mobile: "column", desktop: "row" },
          alignItems: "center",
          gap: "48px",
        }}
      >
        <Grid
          item
          mobile
          style={{ maxWidth: "900px" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",

            textAlign: { mobile: "center", desktop: "left" },
          }}
        >
          <Typography variant="h1" color="text.main">
            Move swiftly with
            <span style={{ color: "#FF4545" }}> NMS Creative UI</span>
          </Typography>
          <Typography variant="body1" color="text.main">
            Maximize your project's potential with NMS Creative UI – an
            innovative library empowering rapid customization for efficient web
            and app development.
          </Typography>
          <Grid container spacing={2}>
            <Grid item mobile={12} tablet={8} laptop={9} desktop={8}>
              <Paper
                elevation={4}
                sx={{
                  "&.MuiPaper-elevation4": {
                    padding: "0 8px",
                    borderRadius: "10px",
                  },
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography>npm install nms-creative-ui</Typography>
                  <CopyToClipboard
                    text="npm install nms-creative-ui"
                    onCopy={handleCopyToClipboard}
                  >
                    <IconButton>
                      <Icon
                        size={24}
                        solariconset={SolarIconSet.Copy}
                        iconStyle={"BoldDuotone"}
                        color={"inherit"}
                      />
                    </IconButton>
                  </CopyToClipboard>
                </Stack>
              </Paper>
            </Grid>
            <Grid item mobile={12} tablet={4} laptop={3} desktop={4}>
              <Button
                component={Link}
                color="primary"
                sx={{ height: "max-content", width: { mobile: "100%" } }}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          mobile
          sx={{
            display: { mobile: "none", laptop: "block" },
          }}
        >
          <Paper
            elevation={4}
            sx={{
              flexDirection: "column",
              display: "flex",
              gap: "12px",
              "&.MuiPaper-elevation4": { padding: "24px 16px" },
            }}
          >
            <Box
              elevation={4}
              sx={{
                display: "flex",
                gap: "12px",
                "&.MuiPaper-elevation4": { padding: "24px 16px" },
              }}
            >
              <Grid container direction="column" spacing={1}>
                <Grid item mobile>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Paper
                      elevation={4}
                      sx={{ "&.MuiPaper-elevation4": { padding: "2px" } }}
                    >
                      <DateCalendar />
                    </Paper>
                  </LocalizationProvider>
                </Grid>
                <Grid item mobile>
                  <Paper
                    elevation={4}
                    sx={{ "&.MuiPaper-elevation4": { padding: "12px" } }}
                  >
                    <Pagination count={10} siblingCount={0} color="secondary" />
                  </Paper>
                </Grid>
              </Grid>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Card
                    elevation={4}
                    sx={{
                      "&.MuiPaper-elevation4": {
                        padding: "16px 16px",
                        maxWidth: "100%",
                        display: "flex",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="icon tabs example"
                    >
                      <Tab
                        icon={
                          <Icon
                            solariconset={SolarIconSet.PhoneRounded}
                            size={24}
                            iconStyle={"BoldDuotone"}
                          />
                        }
                        aria-label="phone"
                      />
                      <Tab
                        icon={
                          <Icon
                            solariconset={SolarIconSet.Heart}
                            size={24}
                            iconStyle={"BoldDuotone"}
                          />
                        }
                        aria-label="favorite"
                      />
                      <Tab
                        icon={
                          <Icon
                            solariconset={SolarIconSet.ArchiveUpMinimlistic}
                            size={24}
                            iconStyle={"BoldDuotone"}
                          />
                        }
                        aria-label="archive"
                      />
                    </Tabs>
                  </Card>
                </Grid>
                <Grid item>
                  <Card
                    elevation={4}
                    sx={{
                      backgroundColor: "#FF4545",
                      "&.MuiPaper-elevation4": {
                        padding: "24px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "24px",
                        height: { laptop: "218px", desktop: "195px" },
                      },
                    }}
                  >
                    <Typography color="#fff" variant="subtitle2">
                      "Elevate your web performance with NMS Creative UI's
                      ready-to-use libraries. Ensure success from the start!"
                    </Typography>
                    <Button
                      style={{ backgroundColor: "#fff" }}
                      startIcon={
                        <img
                          loading="lazy"
                          src="/logo/nmsLogo.svg"
                          alt="NMS LOGO"
                          style={{
                            height: "31px",
                            width: "50px",
                          }}
                        />
                      }
                    >
                      <Typography color="primary" variant={"body1"}>
                        Customized
                      </Typography>
                    </Button>
                  </Card>
                </Grid>
                <Grid item>
                  <Card
                    elevation={4}
                    sx={{
                      "&.MuiPaper-elevation4": { padding: "0px" },
                    }}
                  >
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          sx={{ backgroundColor: "#FF4545" }}
                        >
                          <Icon
                            size={24}
                            solariconset={SolarIconSet.User}
                            iconStyle={"BoldDuotone"}
                            color={"inherit"}
                          />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                          <Fragment>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Ali Connors — I'll be in your neighborhood doing
                              errands this…"
                            </Typography>
                          </Fragment>
                        }
                      />
                    </ListItem>
                  </Card>
                </Grid>
              </Grid>
            </Box>
            <Grid container spacing={1}>
              <Grid item mobile={9}>
                <Card
                  elevation={4}
                  sx={{
                    minHeight: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    justifyContent: "center",
                    "&.MuiPaper-elevation4": { padding: "12px" },
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src="/avatars/Avatar 1.svg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Jane Doe"
                      secondary={
                        <Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Guest User
                          </Typography>
                        </Fragment>
                      }
                    />
                  </ListItem>

                  <DiscreteSliderLabel />
                </Card>
              </Grid>
              <Grid item mobile={2}>
                <Paper
                  elevation={4}
                  sx={{
                    "&.MuiPaper-elevation4": {
                      padding: "16px",
                      display: "flex",
                      gap: "24px",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    },
                  }}
                >
                  <CircularProgress color="primary" thickness={6} />
                  <Typography variant="subtitle2">Loading</Typography>
                </Paper>
              </Grid>
              <Grid item mobile={1}>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                  orientation="vertical"
                >
                  <ToggleButton
                    value="left"
                    aria-label="left aligned"
                    style={{ color: "#fff", backgroundColor: "#486BAF" }}
                  >
                    <SolarIconSet.TextBold />
                  </ToggleButton>
                  <ToggleButton value="center" aria-label="centered">
                    <SolarIconSet.TextItalic />
                  </ToggleButton>
                  <ToggleButton
                    value="right"
                    aria-label="right aligned "
                    style={{ color: "#fff", backgroundColor: "#486BAF" }}
                  >
                    <SolarIconSet.TextUnderline />
                  </ToggleButton>
                  <ToggleButton value="justify" aria-label="justified" disabled>
                    <SolarIconSet.Eraser />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
