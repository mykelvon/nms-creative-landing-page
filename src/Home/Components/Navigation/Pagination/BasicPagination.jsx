
import { Pagination, Stack } from "nms-creative-ui";
import React from "react";


const BasicPagination = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} siblingCount={0}/>
      <Pagination count={10} siblingCount={0} color="primary" />
      <Pagination count={10} siblingCount={0} color="secondary" />
      <Pagination count={10} siblingCount={0} disabled />
    </Stack>
  );
};

export default BasicPagination;
