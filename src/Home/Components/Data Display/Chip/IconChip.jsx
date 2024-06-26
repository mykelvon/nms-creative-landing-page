import { Chip, Stack } from "nms-creative-ui";
import React from "react";
import * as SolarIconSet from "solar-icon-set";

const IconChip = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        icon={<SolarIconSet.RoundAltArrowDown iconStyle="BoldDuotone" />}
        label="With Icon"
      />
      <Chip
        icon={<SolarIconSet.RoundAltArrowDown />}
        label="With Icon"
        variant="outlined"
      />
    </Stack>
  );
};

export default IconChip;
