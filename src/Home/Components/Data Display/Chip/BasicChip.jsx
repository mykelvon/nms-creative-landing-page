import { Chip, Stack } from "nms-creative-ui";
import React from "react";

const BasicChip = () => {
  return (
    <Stack direction={"column"} spacing={2}>
      <Stack direction="row" spacing={2}>
        <Chip label="Chip Contained" variant={"filled"}  />
        <Chip label="Chip Outlined" variant={"outlined"} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <Chip label="Chip Contained" variant={"filled"} disabled  />
        <Chip label="Chip Outlined" variant={"outlined"} disabled />
      </Stack>
    </Stack>
  );
};

export default BasicChip;
