import * as SolarIconSet from "solar-icon-set";
import PropTypes from "prop-types";
import {
  Badge,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Tab,
  Tabs,
  Typography,
} from "nms-creative-ui";
import React, { useEffect, useState } from "react";
import { Divider, useMediaQuery } from "@mui/material";
import CodeBlock from "../../Components/lib/ReactSyntaxHighlighter";
import { MuiSampleCode } from "../../Components/Generic Components/General Components/MuiSampleCode";
import { CustomTheme } from "../../Components/Generic Components/General Components/CustomTheme";
import Marquee from "react-fast-marquee";
import { useUIStore } from "../../store/store";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { THEME_KEY } from "../../config/enums";
import CustomTab from "../../Components/Generic Components/General Components/CustomTab";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{}}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const FeaturesSection = () => {
  const [mainTabValue, setMainTabValue] = useState(0);
  const [nestedTabValue, setNestedTabValue] = useState(0);
  const [{ theme }, { setTheme }] = useUIStore();
  const [, setValueTheme] = useLocalStorage(THEME_KEY, theme);

  const handleMainTabChange = (event, newValue) => {
    setMainTabValue(newValue);
  };

  const handleNestedTabChange = (event, newValue) => {
    setNestedTabValue(newValue);
  };
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isDesktop = useMediaQuery("(max-width:1200px)");
  return (
    <Box
      sx={{
        height: { mobile: "100%" },
        display: "flex",
        justifyContent: "center",
        gap: "48px",
        padding: {
          mobile: "50px 16px",
          tablet: "48px 16px",
        },
      }}
    >
      <Stack
        spacing={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { mobile: "100%", largeDesktop: "1300px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" color="text.main">
            Features
          </Typography>
          <Typography variant="h2" color="primary">
            Explore its features
          </Typography>
          <Divider
            orientation="horizontal"
            variant="middle"
            style={{
              width: "200px",
              borderWidth: "1.5px",
              borderColor: "#FF4545",
              margin: "12px auto",
            }}
          />
          <Typography variant="body1" color="text.main">
            Unleash creativity by exploring a wealth of features that revolve
            around an extensive library of design elements and components.
          </Typography>
        </Box>

        <Grid container spacing={5}>
          <Grid item desktop={6} mobile={12}>
            <Stack
              sx={{ height: "100%", display: "flex", justifyContent: "center" }}
            >
              <Tabs
                orientation={isDesktop ? "horizontal" : "vertical"}
                value={mainTabValue}
                variant={isMobile ? "scrollable" : ""}
                onChange={handleMainTabChange}
                aria-label="Features tab"
                sx={{
                  ".MuiTabs-indicator": {
                    backgroundColor: "transparent",
                  },
                  ".css-145v6pe-MuiButtonBase-root-MuiTabScrollButton-root": {
                    display: "none",
                  },
                }}
              >
                <CustomTab
                  title="Customized Components"
                  description="Code faster, code smarter with NMS Creative UI – the React UI library that not only prioritizes code consistency but also accelerates your development workflow for unmatched efficiency."
                  icon={
                    <Icon
                      solariconset={SolarIconSet.Palette}
                      size={24}
                      iconStyle={"BoldDuotone"}
                    />
                  }
                  isSelected={mainTabValue === 0}
                  {...a11yProps(0)}
                />

                <CustomTab
                  title="Responsiveness"
                  description="A design library that understands the importance of seamless responsiveness in today's multi-device landscape."
                  icon={
                    <Icon
                      solariconset={SolarIconSet.MaximizeSquareMinimalistic}
                      size={24}
                      iconStyle={"BoldDuotone"}
                    />
                  }
                  isSelected={mainTabValue === 1}
                  {...a11yProps(1)}
                />
                <CustomTab
                  title="Templates"
                  description="Stylish, user-friendly designs for seamless, modern interfaces. Ideal for diverse projects, priotizing aesthetics and functionality for enhanced user experiences."
                  icon={
                    <Icon
                      solariconset={SolarIconSet.Pallete2}
                      size={24}
                      iconStyle={"BoldDuotone"}
                    />
                  }
                  isSelected={mainTabValue === 2}
                  {...a11yProps(2)}
                />
                <CustomTab
                  title="NMS Creative UI Extras"
                  description="Graphs, charts, rich text, upload files, and form validation — the essential toolkit for dynamic and interactive data representation and user engagement."
                  icon={
                    <Icon
                      solariconset={SolarIconSet.Filters}
                      size={24}
                      iconStyle={"BoldDuotone"}
                    />
                  }
                  isSelected={mainTabValue === 3}
                  {...a11yProps(3)}
                />
              </Tabs>
            </Stack>
          </Grid>
          <Grid item desktop={6} mobile={12}>
            <Box
              sx={{
                backgroundImage: `url("/images/BG.png")`,
                backgroundSize: `cover`,
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                overflow: { mobile: "visible", laptop: "hidden" },
              }}
            >
              <CustomTabPanel value={mainTabValue} index={0}>
                <Stack
                  direction="column"
                  spacing={4}
                  sx={{
                    height: { mobile: "100%", desktop: "900px" },
                    width: "100%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Paper
                    sx={{
                      ".css-hkfoxl-MuiPaper-root": {
                        padding: "0px !important",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "24px",
                        padding: "24px",
                        margin: { mobile: "24px 24px", laptop: "48px 24px" },
                        justifyContent: "center",
                        flexWrap: "wrap",
                        alignItems: "center",
                        backgroundColor:
                          theme === "dark" ? "transparent" : "#FBFBFC",
                        borderRadius: "16px",
                        border:
                          "var(--none, 1px) dashed var(--Colors-Layout-stroke-primary, rgba(145, 158, 171, 0.25))",
                      }}
                    >
                      <Button style={{ width: "fit-content" }}>Default</Button>
                      <Switch color="primary" checked />
                      <Checkbox checked />

                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel value="female" control={<Radio />} />
                      </RadioGroup>
                      <Badge badgeContent={1} color={"primary"}>
                        <Icon color="primary">
                          <SolarIconSet.Letter
                            size={24}
                            iconStyle="BoldDuotone"
                          />
                        </Icon>
                      </Badge>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        borderTop: "1px solid #919EAB25",
                      }}
                    >
                      <Box>
                        <Tabs
                          variant="fullWidth"
                          value={nestedTabValue}
                          onChange={handleNestedTabChange}
                          aria-label="basic tabs example"
                        >
                          <Tab label="MUI" {...a11yProps(0)} />
                          <Tab label="Custom Theme" {...a11yProps(1)} />
                        </Tabs>
                      </Box>
                      <Box sx={{ backgroundColor: "rgb(1, 22, 39)" }}>
                        <CustomTabPanel value={nestedTabValue} index={0}>
                          <CodeBlock code={MuiSampleCode} language={"jsx"} />
                        </CustomTabPanel>
                        <CustomTabPanel value={nestedTabValue} index={1}>
                          <CodeBlock code={CustomTheme} language={"jsx"} />
                        </CustomTabPanel>
                      </Box>
                    </Box>
                  </Paper>
                </Stack>
              </CustomTabPanel>

              <CustomTabPanel value={mainTabValue} index={1}>
                <Stack
                  direction="column"
                  spacing={4}
                  sx={{
                    height: { mobile: "100%", desktop: "900px" },
                    width: "100%",
                  }}
                >
                  <Stack
                    spacing={2}
                    sx={{
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { mobile: "start", desktop: "center" },
                    }}
                  >
                    <img
                      loading="lazy"
                      src="/images/responsiveness-img.png"
                      alt=""
                      style={{ maxWidth: "534px", width: "100%" }}
                    />
                  </Stack>
                </Stack>
              </CustomTabPanel>
              <CustomTabPanel value={mainTabValue} index={2}>
                <Stack
                  direction="column"
                  spacing={4}
                  sx={{
                    height: { mobile: "100%", desktop: "900px" },
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor:
                        theme === "light" ? "#FF454510" : "transparent",
                      overflow: "hidden",
                      height: "792px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: { mobile: "100%", laptop: "1336px" },
                    }}
                  >
                    <Marquee direction="right">
                      <img
                        loading="lazy"
                        src="/images/MarqueeImage.png"
                        alt=""
                      />
                    </Marquee>
                    <Marquee direction="left">
                      <img
                        loading="lazy"
                        src="/images/MarqueeImage.png"
                        alt=""
                      />
                    </Marquee>
                  </Box>
                </Stack>
              </CustomTabPanel>

              <CustomTabPanel value={mainTabValue} index={3}>
                <Stack
                  direction="column"
                  spacing={4}
                  sx={{
                    height: { mobile: "100%", desktop: "900px" },
                    width: "100%",
                  }}
                >
                  <Stack
                    spacing={2}
                    sx={{
                      display: "flex",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: { mobile: "100%", laptop: "472px" },
                        height: { mobile: "100%", laptop: "270px" },
                      }}
                    >
                      <img
                        loading="lazy"
                        src="/images/Area chart.png"
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: { mobile: "100%", laptop: "472px" },
                        height: { mobile: "100%", laptop: "270px" },
                      }}
                    >
                      <img
                        loading="lazy"
                        src="/images/Line chart.png"
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: { mobile: "100%", laptop: "472px" },
                        height: { mobile: "100%", laptop: "270px" },
                      }}
                    >
                      <img
                        loading="lazy"
                        src="/images/Column chart.png"
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </Box>
                  </Stack>
                </Stack>
              </CustomTabPanel>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default FeaturesSection;
