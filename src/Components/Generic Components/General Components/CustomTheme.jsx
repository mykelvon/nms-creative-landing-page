export const CustomTheme = `import React, { Fragment } from "react";
import { Button, Stack } from "nms-creative-ui";

const Basic = () => {
  return (
    <Fragment>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Fragment>
  );
};

export default Basic;`


