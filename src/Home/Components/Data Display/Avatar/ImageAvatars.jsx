import { Avatar, Stack } from "nms-creative-ui";

const ImageAvatars = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Avatar alt="User Avatar" src="/avatars/Avatar 1.svg" />
      <Avatar alt="User Avatar" src="/avatars/Avatar 2.svg" />
      <Avatar alt="User Avatar" src="/avatars/Avatar 3.svg" />
    </Stack>
  );
};

export default ImageAvatars;
