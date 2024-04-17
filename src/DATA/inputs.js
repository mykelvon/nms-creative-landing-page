import BasicAutocomplete from "../Home/Components/Inputs/Autocomplete/BasicAutocomplete";
import FreeSolo from "../Home/Components/Inputs/Autocomplete/FreeSolo";
import MultipleValue from "../Home/Components/Inputs/Autocomplete/MultipleValue";
import SmallButton from "../Home/Components/Inputs/Buttons/SmallButton";
import MediumButton from "../Home/Components/Inputs/Buttons/MediumButton";
import LargeButton from "../Home/Components/Inputs/Buttons/LargeButton";
import BasicRadio from "../Home/Components/Inputs/RadioGroup/BasicRadio";
import Controlled from "../Home/Components/Inputs/RadioGroup/Controlled";
import RadioSizes from "../Home/Components/Inputs/RadioGroup/RadioSizes";
import BasicSelect from "../Home/Components/Inputs/Select/BasicSelect";
import Filled from "../Home/Components/Inputs/Select/Filled";
import Standard from "../Home/Components/Inputs/Select/Standard";
import Filledtextfield from "../Home/Components/Inputs/Text Field/FilledTextField";
import OutlinedTextField from "../Home/Components/Inputs/Text Field/OutlinedTextField";
import StandardTextfield from "../Home/Components/Inputs/Text Field/StandardTextField";
import SmallCheckbox from "../Home/Components/Inputs/Checkbox/SmallCheckbox";
import MediumCheckbox from "../Home/Components/Inputs/Checkbox/MediumCheckbox";
import LargeCheckbox from "../Home/Components/Inputs/Checkbox/LargeCheckbox";
import SmallSwitch from "../Home/Components/Inputs/Switch/SmallSwitch";
import DefaultSwitchSize from "../Home/Components/Inputs/Switch/DefaultSwitchSize";
import ColorSwitch from "../Home/Components/Inputs/Switch/ColorSwitch";

const INPUTS = [
  {
    id: 1,
    name: "Buttons",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Small", "Medium", "Large"],
    component: [SmallButton, MediumButton, LargeButton],
  },
  {
    id: 2,
    name: "Textfield",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Small", "Medium", "Large"],
    component: [StandardTextfield, OutlinedTextField, Filledtextfield],
  },
  {
    id: 3,
    name: "Checkbox",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Small", "Medium", "Large"],
    component: [SmallCheckbox, MediumCheckbox, LargeCheckbox],
  },
  {
    id: 4,
    name: "Switch",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Small", "Default", "Color"],
    component: [SmallSwitch, DefaultSwitchSize, ColorSwitch ],
  },
  {
    id: 5,
    name: "Radio Button",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Small", "Medium", "Large"],
    component: [BasicRadio, Controlled, RadioSizes],
  },
  {
    id: 6,
    name: "Autocomplete",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Basic", "Multiple", "Free Solo"],
    component: [BasicAutocomplete, MultipleValue, FreeSolo],
  },
  {
    id: 7,
    name: "Select",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Basic", "Filled", "Standard"],
    component: [BasicSelect, Filled, Standard],
  },
];

export default INPUTS;
