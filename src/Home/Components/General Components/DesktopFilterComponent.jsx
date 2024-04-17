import React, { Fragment, useState } from "react";

import * as SolarIconSet from "solar-icon-set";
import { Accordion, AccordionSummary, Box, IconButton, Menu, MenuItem, Paper, Typography } from "nms-creative-ui";
import { FILTER_LIST } from "./filterdata";
import { useMediaQuery } from "@mui/material";

const DesktopFilterComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState();
  const [anchorEl, setAnchorEl] = useState(null); 

  const isMobile = useMediaQuery("(max-width:1024px)");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setValue(event.target.value);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  if (isMobile) {
    return (
        <Box sx={{display: "flex", justifyContent: "end"}}>
        <Menu
          id="filter-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {FILTER_LIST.map((item, id) => (
            <MenuItem
              key={id}
              onClick={() => {
                setValue(item.panel);
                handleMenuClose();
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      
        <IconButton
          color="primary"
          aria-controls="filter-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
        >
          <SolarIconSet.Filter iconStyle="BoldDuotone" size={24} />
        </IconButton>
      </Box>
      
    );
  }

  return (
    <Paper sx={{padding:"24px"}}>
      <Typography variant={"h5"}>Filters</Typography>
      {FILTER_LIST.map((item, id) => (
        <Accordion
          expanded={expanded === item.panel}
          onChange={handleChange(item.panel)}
          key={id}
        >
          <AccordionSummary
            expandIcon={<SolarIconSet.AltArrowDown iconStyle="BoldDuotone" size={24} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle2">{item.label}</Typography>
          </AccordionSummary>
        </Accordion>
      ))}
    </Paper>
  );
};

export default DesktopFilterComponent;
