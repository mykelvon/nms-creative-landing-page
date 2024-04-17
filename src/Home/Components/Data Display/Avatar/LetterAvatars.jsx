import { Avatar, Stack } from "nms-creative-ui";
import { Fragment } from "react";

const LetterAvatars = () => {
  return (
    <Fragment>
      <Stack direction="row" spacing={4}>
        <Avatar size="small">A</Avatar>
        <Avatar size="medium">B</Avatar>
        <Avatar size="large">C</Avatar>
      </Stack>
    </Fragment>
  );
};

export default LetterAvatars;
