import { Badge, Icon, Stack } from "nms-creative-ui";
import React from "react";

import * as SolarIconSet from "solar-icon-set";

const MaximumValue = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Badge badgeContent={99} color={"primary"}>
        <Icon
          size={24}
          solariconset={SolarIconSet.Letter}
          iconStyle={"BoldDuotone"}
          color={"success"}
        />
      </Badge>

      <Badge badgeContent={1000} color={"primary"} max={99}>
        <Icon
          size={24}
          solariconset={SolarIconSet.Letter}
          iconStyle={"BoldDuotone"}
          color={"success"}
        />
      </Badge>

      <Badge badgeContent={1000} color={"primary"} max={999}>
        <Icon
          size={24}
          solariconset={SolarIconSet.Letter}
          iconStyle={"BoldDuotone"}
          color={"success"}
        />
      </Badge>
    </Stack>
  );
};

export default MaximumValue;
