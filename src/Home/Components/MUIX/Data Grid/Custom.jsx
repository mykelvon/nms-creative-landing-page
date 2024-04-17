import React, { Fragment } from "react";
import * as SolarIconSet from "solar-icon-set";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { Accordion, AccordionDetails, AccordionSummary, Chip, FormControl, FormControlLabel, Grid, Icon, Paper, Radio, RadioGroup, Stack, Typography } from "nms-creative-ui";
import DataGrid from "../../../../Components/MUIX/Data Grid/DataGrid";

const columns = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 90,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="Avatar"
        style={{ width: 40, height: 40, borderRadius: "50%" }}
      />
    ),
  },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 150,
    editable: true,
  },
  {
    field: "personalEmail",
    headerName: "Personal Email",
    width: 150,
    editable: true,
  },

  {
    field: "category",
    headerName: "Category",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    editable: true,
    renderCell: (params) => {
      return (
        <Fragment>
          {params.value === "Active" ? (
            <Chip color="success" label="Active" />
          ) : (
            <Chip color="error" label="Inactive" />
          )}
        </Fragment>
      );
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 180,
    editable: false,
    cellClassName: "actions",
    renderCell: () => {
      return (
        <Fragment>
          <GridActionsCellItem
            icon={
              <Icon color="secondary">
                <SolarIconSet.Pen
                  iconStyle="BoldDuotone"
                  size={24}
                  label="Edit"
                />
              </Icon>
            }
          />
          <GridActionsCellItem
            icon={
              <Icon color="secondary">
                <SolarIconSet.Eye
                  iconStyle="BoldDuotone"
                  size={24}
                  label="Edit"
                />
              </Icon>
            }
          />
        </Fragment>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    avatar: "/avatars/Avatar 1.svg",
    fullName: "Von Perez",
    personalEmail: "vp@gmail.com",
    category: "Office Based",
    status: "Active",
  },
  {
    id: 2,
    avatar: "/avatars/Avatar 2.svg",
    fullName: "Aldrin Villalobos",
    personalEmail: "vp@gmail.com",
    category: "Office Based",
    status: "Inactive",
  },
  {
    id: 3,
    avatar: "/avatars/Avatar 3.svg",
    fullName: "Elmer Bautista",
    personalEmail: "vp@gmail.com",
    category: "Office Based",
    status: "Active",
  },
  {
    id: 4,
    avatar: "/avatars/Avatar 4.svg",
    fullName: "Marjon Dupeng",
    personalEmail: "vp@gmail.com",
    category: "Office Based",
    status: "Inactive",
  },
  {
    id: 5,
    avatar: "/avatars/Avatar 5.svg",
    fullName: "Budang",
    personalEmail: "vp@gmail.com",
    category: "Office Based",
    status: "Active",
  },
  {
    id: 6,
    avatar: "/avatars/Avatar 6.svg",
    fullName: "Celine",
    personalEmail: "vp@gmail.com",
    category: "Office Based",
    status: "Inactive",
  },
  {
    id: 7,
    avatar: "/avatars/Avatar 7.svg",
    fullName: "Von Perez",
    personalEmail: "vp@gmail.com",
    category: "Office Based",
    status: "Active",
  },
  {
    id: 8,
    avatar: "/avatars/Avatar 8.svg",
    fullName: "Von Perez",
    personalEmail: "vp@gmail.com",
    category: "Office Based",
    status: "Inactive",
  },
];

const Custom = () => {
  return (
    <Grid container spacing={2}>
      <Grid item desktop={4}>
        <Paper sx={{ padding: "24px", border: "1px solid #919EAB40" }}>
          <Typography variant={"h5"}>Filters</Typography>
          <Stack>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <SolarIconSet.AltArrowDown
                    size={24}
                    iconStyle="BoldDuotone"
                  />
                }
              >
                <Typography variant={"body1"}>Order</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  ".MuiAccordion-region": {
                    padding: "0px",
                  },
                }}
              >
                <FormControl>
                  <RadioGroup>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <SolarIconSet.AltArrowDown
                    size={24}
                    iconStyle="BoldDuotone"
                  />
                }
              >
                <Typography variant={"body1"}>Filter By</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  ".MuiAccordion-region": {
                    padding: "0px",
                  },
                }}
              >
                <FormControl>
                  <RadioGroup>
                    <FormControlLabel
                      value="lastName"
                      control={<Radio />}
                      label="Last Name"
                    />
                    <FormControlLabel
                      value="createdAt"
                      control={<Radio />}
                      label="Created At"
                    />
                    <FormControlLabel
                      value="personalEmail"
                      control={<Radio />}
                      label="Personal Email"
                    />

                    <FormControlLabel
                      value="companyEmail"
                      control={<Radio />}
                      label="Company Email"
                    />

                    <FormControlLabel
                      value="birthdate"
                      control={<Radio />}
                      label="Birthdate"
                    />
                  </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <SolarIconSet.AltArrowDown
                    size={24}
                    iconStyle="BoldDuotone"
                  />
                }
              >
                <Typography variant={"body1"}>Employment Category</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  ".MuiAccordion-region": {
                    padding: "0px",
                  },
                }}
              >
                <FormControl>
                  <RadioGroup>
                    <FormControlLabel
                      value="all"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="officeBased"
                      control={<Radio />}
                      label="Office Based"
                    />
                    <FormControlLabel
                      value="homeBased"
                      control={<Radio />}
                      label="Home Based"
                    />

                    <FormControlLabel
                      value="hybrid"
                      control={<Radio />}
                      label="Hybrid"
                    />
                  </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <SolarIconSet.AltArrowDown
                    size={24}
                    iconStyle="BoldDuotone"
                  />
                }
              >
                <Typography variant={"body1"}>Account Status</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  ".MuiAccordion-region": {
                    padding: "0px",
                  },
                }}
              >
                <FormControl>
                  <RadioGroup>
                    <FormControlLabel
                      value="all"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="active"
                      control={<Radio />}
                      label="Active"
                    />
                    <FormControlLabel
                      value="inactive"
                      control={<Radio />}
                      label="Inactive"
                    />
                  </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={
                  <SolarIconSet.AltArrowDown
                    size={24}
                    iconStyle="BoldDuotone"
                  />
                }
              >
                <Typography variant={"body1"}>Platform</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  ".MuiAccordion-region": {
                    padding: "0px",
                  },
                }}
              >
                <FormControl>
                  <RadioGroup>
                    <FormControlLabel
                      value="all"
                      control={<Radio />}
                      label="All"
                    />
                    <FormControlLabel
                      value="hr"
                      control={<Radio />}
                      label="HR"
                    />
                    <FormControlLabel
                      value="exam"
                      control={<Radio />}
                      label="Exam"
                    />
                    <FormControlLabel
                      value="evaluation"
                      control={<Radio />}
                      label="Evaluation"
                    />
                  </RadioGroup>
                </FormControl>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Paper>
      </Grid>
      <Grid item mobile={12} desktop={8}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 6,
              },
            },
          }}
          pageSizeOptions={[9]}
          density={"comfortable"}
        />
      </Grid>
    </Grid>
  );
};

export default Custom;
