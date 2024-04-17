import { Box, Grid, Stack, Tab, Tabs, Typography } from "nms-creative-ui";
import { Fragment, useEffect, useState } from "react";
import INPUTS from "../../DATA/inputs";
import CTA from "../Components/General Components/CTA";
import { Divider } from "@mui/material";
import DATADISPLAY from "../../DATA/datadisplay";
import NestedTabComponent from "../Components/General Components/NestedTabComponent";
import NAVIGATION from "../../DATA/navigation";
import FEEDBACK from "../../DATA/feedback";
import SURFACES from "../../DATA/surfaces";
import TwoTabComponent from "../Components/General Components/TwoTabComponent";
import MUIX from "../../DATA/muiX";
import { useUIStore } from "../../store/store";
import { THEME_KEY } from "../../config/enums";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import CustomDivider from "../../Components/Generic Components/General Components/CustomDivider";

const UiComponentsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [{ theme }, { setTheme }] = useUIStore();
  const [, setValueTheme] = useLocalStorage(THEME_KEY, theme);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
      <Stack
      justifyContent="center"
      alignItems="center"
        sx={{
       
          ".css-13xfq8m-MuiTabPanel-root": { maxWidth: "100%;", padding: "0" },
          ".css-10ut4ui-MuiButtonBase-root-MuiTab-root": { minWidth: "auto" },
          ".css-1q04gal-MuiDateCalendar-root, .css-ku1d3k-MuiTimeClock-root": {
            mobile: { width: "100%" },
          },
          padding: {
            mobile: "50px 16px",
            tablet: "48px 16px",
          },
          backgroundColor: theme === "dark" ? "#161C24" : "#fff",
        }}
      >
        <Box
          sx={{
            width: { mobile: "100%", largeDesktop: "1300px" },
            alignItems: "center",
          }}
        >
          <Stack alignItems="center" spacing={1}>
            <Typography variant="h4" color="text.main">Ready-to-use</Typography>
            <Typography variant="h2" color="primary">
              Creative UI Components
            </Typography>
            <CustomDivider/>
          </Stack>
          <Typography variant="body1" color="text.main" sx={{margin:"24px 0px"}}>
              Utilize our pre-designed elements such as buttons, inputs, cards,
              tables, and more to effortlessly craft visually attractive web
              pages for your project in significantly less time!
            </Typography>
          <Stack spacing={4}>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                ".css-heg063-MuiTabs-flexContainer": {
                  display: "flex",
                  gap: "24px",
                },
              }}
              variant={isMobile ? "scrollable" : "fullWidth"}
            >
              <Tab label="INPUTS" {...a11yProps(0)} />
              <Tab label="DATA DISPLAY" {...a11yProps(1)} />
              <Tab label="NAVIGATION" {...a11yProps(2)} />
              <Tab label="FEEDBACK" {...a11yProps(3)} />
              <Tab label="SURFACES" {...a11yProps(4)} />
              <Tab label="MUI X" {...a11yProps(5)} />
            </Tabs>

            <CustomTabPanel value={value} index={0}>
              <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                {INPUTS.map((item, index) => (
                  <Grid item mobile={12} tablet={6} laptop={4} key={index} >
                    <NestedTabComponent item={item} />
                  </Grid>
                ))}
                <Grid item mobile={12} tablet={6} laptop={4}>
                  <CTA />
                </Grid>
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                {DATADISPLAY.map((item, index) => (
                  <Grid item mobile={12} tablet={6} laptop={4} key={index} >
                    <NestedTabComponent item={item} />
                  </Grid>
                ))}
                <Grid item mobile={12} tablet={6} laptop={4}>
                  <CTA />
                </Grid>
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                {NAVIGATION.map((item, index) => (
                  <Grid item mobile={12} tablet={6} laptop={4} key={index} >
                    <NestedTabComponent item={item} />
                  </Grid>
                ))}
                <Grid item mobile={12} tablet={6} laptop={4}>
                  <CTA />
                </Grid>
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                {FEEDBACK.map((item, index) => (
                  <Grid item mobile={12} tablet={6} laptop={4} key={index} >
                    <TwoTabComponent item={item} />
                  </Grid>
                ))}
                <Grid item mobile={12} tablet={6} laptop={4}>
                  <CTA />
                </Grid>
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                {SURFACES.map((item, index) => (
                  <Grid item mobile={12} tablet={6} laptop={4} key={index} >
                    <TwoTabComponent item={item} />
                  </Grid>
                ))}
                <Grid item mobile={12} tablet={6} laptop={4}>
                  <CTA />
                </Grid>
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
              <Grid sx={{ flexGrow: 1 }} container spacing={2}  >
                {MUIX.map((item, index) => (
                  <Grid item mobile={12} key={index}>
                    <TwoTabComponent item={item} />
                  </Grid>
                ))}
              </Grid>
            </CustomTabPanel>
          </Stack>
        </Box>
      </Stack>
  );
};

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export default UiComponentsSection;
