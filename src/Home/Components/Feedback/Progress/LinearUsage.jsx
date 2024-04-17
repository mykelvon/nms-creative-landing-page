import { LinearProgress, Stack } from "nms-creative-ui";
import React from "react";

const LinearUsage = () => {
  return (
    <Stack spacing={4} sx={{width:"200px"}} >
      <LinearProgress sx={{maxWidth:"200px"}} variant="indeterminate" color="primary" />
      <LinearProgress sx={{maxWidth:"200px"}} variant="determinate" color="secondary" />
      <LinearProgress sx={{maxWidth:"200px"}} variant="query" color="success" />
    </Stack>
  );
};

export default LinearUsage;
