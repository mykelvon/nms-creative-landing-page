import React, { Fragment } from "react";
import { Checkbox } from "nms-creative-ui";

const LargeCheckbox = () => {
  return (
    <Fragment>
      <Checkbox checked sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
    </Fragment>
  );
};

export default LargeCheckbox;
