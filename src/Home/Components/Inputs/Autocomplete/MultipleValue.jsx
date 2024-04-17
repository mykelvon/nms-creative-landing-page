import React, { Fragment } from "react";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Autocomplete, Box, Checkbox, FormControl, TextField } from "nms-creative-ui";

const MultipleValue = () => {
  const options = [
    {
      icon: "",
      label: "Option 1",
      value: 1,
    },
    {
      icon: "",
      label: "Option 2",
      value: 2,
    },
    {
      icon: "",
      label: "Option 3",
      value: 3,
    },
  ];

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <Fragment>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <FormControl sx={{ width: 200 }}>
          <Autocomplete
            label="Multiple Values"
            multiple
            id="checkboxes-tags"
            options={options}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li
                {...props}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  checked={selected}
                />
                {option.label}
              </li>
            )}
            renderInput={(params) => (
              <TextField label="Checkboxes" placeholder="hehe" />
            )}
          />
        </FormControl>
      </Box>
    </Fragment>
  );
};

export default MultipleValue;
