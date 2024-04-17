
import { Avatar, Icon, Stack } from "nms-creative-ui";
import { Fragment } from "react";
import * as SolarIconSet from "solar-icon-set";

const VariantAvatars = () => {
  return (
    <Fragment>
      <Stack direction="row" spacing={4}>
        <Avatar color="primary" src="/avatars/Avatar 7.svg" />
        <Avatar color="primary" variant="square">
          A
        </Avatar>
        <Avatar color="primary" variant="rounded">
          <Icon
            size={24}
            solariconset={SolarIconSet.User}
            iconStyle={"BoldDuotone"}
            color={"inherit"}
          />
        </Avatar>
      </Stack>
    </Fragment>
  );
};

export default VariantAvatars;
