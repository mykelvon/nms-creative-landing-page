import ImageAvatars from "../Home/Components/Data Display/Avatar/ImageAvatars";
import LetterAvatars from "../Home/Components/Data Display/Avatar/LetterAvatars";
import VariantAvatars from "../Home/Components/Data Display/Avatar/VariantAvatars";
import BasicBadge from "../Home/Components/Data Display/Badge/BasicBadge";
import DotBagde from "../Home/Components/Data Display/Badge/DotBadge";
import MaximumValue from "../Home/Components/Data Display/Badge/MaximumValue";
import BasicChip from "../Home/Components/Data Display/Chip/BasicChip";
import Colors from "../Home/Components/Data Display/Chip/Colors";
import IconChip from "../Home/Components/Data Display/Chip/IconChip";

const DATADISPLAY = [
  {
    id: 1,
    name: "Avatars",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Image", "Letter", "Variant"],
    component: [ImageAvatars, LetterAvatars, VariantAvatars],
  },
  {
    id: 2,
    name: "Badge",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Basic", "Maximum", "Dot"],
    component: [BasicBadge, MaximumValue, DotBagde],
  },
  {
    id: 3,
    name: "Chip",
    first_value: "1",
    second_value: "2",
    third_value: "3",
    label: ["Basic", "Icon", "Colored"],
    component: [BasicChip, IconChip, Colors],
  },
];

export default DATADISPLAY;
