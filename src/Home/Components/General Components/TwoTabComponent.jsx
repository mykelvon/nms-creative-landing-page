import {
  Box,
  Stack,
  Tab,
  TabContext,
  TabList,
  TabPanel,
  Typography,
} from "nms-creative-ui";
import React from "react";

import { useState } from "react";
import CustomPaper from "../../../Components/Generic Components/General Components/CustomPaper";
import { useUIStore } from "../../../store/store";
import { THEME_KEY } from "../../../config/enums";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

const TwoTabComponent = ({ item }) => {
  const [value, setValue] = useState(item.first_value);
  const [{ theme }, { setTheme }] = useUIStore();
  const [, setValueTheme] = useLocalStorage(THEME_KEY, theme);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CustomPaper>
      <TabContext value={value}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label={item.label[0]}
              value={item.first_value}
              sx={{ paddingX: "20px" }}
            />
            <Tab
              label={item.label[1]}
              value={item.second_value}
              sx={{ paddingX: "20px" }}
            />
          </TabList>
        </Box>

        <TabPanel value={item.first_value}>
          <Stack direction="row" spacing={3} flexWrap="wrap">
            {React.createElement(item.component[0])}
          </Stack>
        </TabPanel>
        <TabPanel value={item.second_value}>
          <Stack direction="row" spacing={3} flexWrap="wrap">
            {React.createElement(item.component[1])}
          </Stack>
        </TabPanel>
      </TabContext>
      <Typography variant="h6" sx={{ width: "100%" }}>
        {item.name}
      </Typography>
    </CustomPaper>
  );
};

export default TwoTabComponent;
