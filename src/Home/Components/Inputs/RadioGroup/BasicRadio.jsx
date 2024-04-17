import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "nms-creative-ui";
import * as React from "react";

const BasicRadio = () => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="yes"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="yes"
          control={<Radio size="small" />}
          label="Yes"
        />
        <FormControlLabel
          value="no"
          control={<Radio size="small" />}
          label="No"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default BasicRadio;
