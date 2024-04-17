import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "nms-creative-ui";
import React from "react";

const Controlled = () => {
  

  return (
    <FormControl>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="yes"
      name="radio-buttons-group"
    >
      <FormControlLabel
        value="yes"
        control={<Radio size="medium" />}
        label="Yes"
      />
      <FormControlLabel
        value="no"
        control={<Radio size="medium" />}
        label="No"
      />
    </RadioGroup>
  </FormControl>
  );
};

export default Controlled;
