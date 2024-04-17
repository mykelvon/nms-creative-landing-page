import { Pagination, Stack } from "nms-creative-ui";
import React from "react";

const PaginationSize = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} siblingCount={0} size="small" />
      <Pagination count={10} siblingCount={0} />
      <Pagination count={10} siblingCount={0} size="large" />
    </Stack>
  );
};

export default PaginationSize;
