import { Autocomplete, Box, FormControl, TextField } from "nms-creative-ui";

const BasicAutocomplete = () => {
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
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <FormControl sx={{ width: 200 }}>
        <Autocomplete
          label="Options"
          id="basic-autocomplete"
          options={options}
          renderInput={(params) => <TextField {...params} />}
        />
      </FormControl>
    </Box>
  );
};

export default BasicAutocomplete;