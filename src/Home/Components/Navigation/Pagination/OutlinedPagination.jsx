import { Pagination, Stack } from "nms-creative-ui";
import React from "react";

const OutlinedPagination = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" siblingCount={0} />
      <Pagination
        count={10}
        variant="outlined"
        color="primary"
        siblingCount={0}
      />
      <Pagination
        count={10}
        variant="outlined"
        color="secondary"
        siblingCount={0}
      />
      <Pagination count={10} variant="outlined" disabled siblingCount={0} />
    </Stack>
  );
};

export default OutlinedPagination;
