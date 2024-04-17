import { CircularProgress, Stack } from "nms-creative-ui";
import React from "react";

const Circular = () => {
  return (
    <Stack direction="row" spacing={4} flexWrap="wrap" justifyContent="center">
      <CircularProgress color="primary" thickness={5} />
      <CircularProgress color="secondary" thickness={5} />
      <CircularProgress color="error" thickness={5} />
      <CircularProgress color="info" thickness={5} />
      <CircularProgress color="success" thickness={5} />
      <CircularProgress color="warning" thickness={5} />
    </Stack>
  );
};

export default Circular;
