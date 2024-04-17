import { Autocomplete, Stack, TextField } from "nms-creative-ui";
import React from "react";

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

const FreeSolo = () => {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        label="Free solo"
        freeSolo
          options={options}
        renderInput={(params) => <TextField {...params} />}
      />
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        label="Search input"
        disableClearable
          options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
};

export default FreeSolo;
