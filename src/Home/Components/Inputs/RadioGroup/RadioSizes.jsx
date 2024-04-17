import { FormControl, FormControlLabel, Radio, RadioGroup } from "nms-creative-ui";

const RadioSizes = () => {
  return (
    <FormControl>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="yes"
      name="radio-buttons-group"
    >
      <FormControlLabel
        value="yes"
        control={<Radio size="large" />}
        label="Yes"
      />
      <FormControlLabel
        value="no"
        control={<Radio size="large" />}
        label="No"
      />
    </RadioGroup>
  </FormControl>
  );
};

export default RadioSizes;
