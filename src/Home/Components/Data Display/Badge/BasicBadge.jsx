import { Badge, Icon } from "nms-creative-ui";
import React from "react";

import * as SolarIconSet from "solar-icon-set";

const BasicBadge = () => {
  return (
    <Badge badgeContent={1} color={"primary"}>
      <Icon
        size={24}
        solariconset={SolarIconSet.Letter}
        iconStyle={"BoldDuotone"}
        color={"primary"}
      />
    </Badge>
  );
};

export default BasicBadge;
