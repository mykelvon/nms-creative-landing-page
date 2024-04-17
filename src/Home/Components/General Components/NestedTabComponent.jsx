import {
  Box,
  Stack,
  Tab,
  TabContext,
  TabList,
  TabPanel,
  Tabs,
  Typography,
} from "nms-creative-ui";
import React from "react";

import { useState } from "react";
import CustomPaper from "../../../Components/Generic Components/General Components/CustomPaper";

const NestedTabComponent = ({ item }) => {
  const [value, setValue] = useState(item.first_value);

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
            borderBottom: 1,
            borderColor: "divider",
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          }}
          onChange={handleChange}
          aria-label="lab API tabs example"
        >
          <Tabs
            sx={{ display: "flex", justifyContent: "center" }}
            value={value}
            onChange={handleChange}
            variant="scrollable"
          >
            <Tab label={item.label[0]} value={item.first_value} />
            <Tab label={item.label[1]} value={item.second_value} />
            <Tab label={item.label[2]} value={item.third_value} />
          </Tabs>
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
        <TabPanel value={item.third_value}>
          <Stack direction="row" spacing={3} flexWrap="wrap">
            {React.createElement(item.component[2])}
          </Stack>
        </TabPanel>
      </TabContext>
      <Typography variant="h6" color="text.main" sx={{ width: "100%"}}>
        {item.name}
      </Typography>
    </CustomPaper>
  );
};

export default NestedTabComponent;
