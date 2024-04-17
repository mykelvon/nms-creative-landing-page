import { FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, Stack, Typography } from "nms-creative-ui";
import React from "react";

import { useState } from "react";

const Customization = () => {
  const [elevation, setElevation] = useState(1);

  const handleChange = (event) => {
    setElevation(Number(event.target.value));
  };

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Stack direction={"column"} spacing={6} textAlign="center">
        <Typography variant={"h6"}>Elevation: {elevation}</Typography>
        <Grid item mobile={12}>
          <Grid container justifyContent="center" spacing={1}>
            {[0].map((value) => (
              <Grid key={value} item>
                <Paper
                  elevation={elevation}
                  sx={{
                    width: "100%",
                    padding: "48px",
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "#212B36" : "#fff",
                  }}
                >
                  {elevation}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item mobile={12}>
          <Grid container justifyContent="center">
            <Grid item>
              <FormControl component="fieldset">
                <RadioGroup
                  name="shadow"
                  aria-label="shadow"
                  value={elevation.toString()}
                  onChange={handleChange}
                  row
                >
                  {[1, 2, 3, 4, 6, 8, 12, 16, 24].map((value) => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Grid>
  );
};

export default Customization;
