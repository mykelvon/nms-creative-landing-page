import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
} from "nms-creative-ui";
import { InputLabel } from "@mui/material";

const Filled = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ width: 200 }}>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
        variant="filled"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Filled;
