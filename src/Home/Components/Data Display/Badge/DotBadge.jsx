import { Badge, Icon, Stack, Typography } from "nms-creative-ui";
import React from "react";

import * as SolarIconSet from "solar-icon-set";

const DotBagde = () => {
  return (
    <Stack direction="row" spacing={4} sx={{flexWrap:"wrap"}}>
      <Badge variant="dot" color={"primary"}>
        <Icon
          size={24}
          solariconset={SolarIconSet.Letter}
          iconStyle={"BoldDuotone"}
          color={"primary"}
        />
      </Badge>

      <Badge variant="dot" color={"secondary"}>
        <Icon
          size={24}
          solariconset={SolarIconSet.Letter}
          iconStyle={"BoldDuotone"}
          color={"secondary"}
        />
      </Badge>

      <Badge variant="dot" color={"warning"}>
        <Icon
          size={24}
          solariconset={SolarIconSet.Letter}
          iconStyle={"BoldDuotone"}
          color={"warning"}
        />
      </Badge>

      <Badge variant="dot" color={"error"}>
        <Icon
          size={24}
          solariconset={SolarIconSet.Letter}
          iconStyle={"BoldDuotone"}
          color={"error"}
        />
      </Badge>

      <Badge variant="dot" color={"info"}>
        <Icon
          size={24}
          solariconset={SolarIconSet.Letter}
          iconStyle={"BoldDuotone"}
          color={"info"}
        />
      </Badge>

      <Badge variant="dot" color={"success"}>
        <Icon
          size={24}
          solariconset={SolarIconSet.Letter}
          iconStyle={"BoldDuotone"}
          color={"success"}
        />
      </Badge>

      <Badge variant="dot" color={"primary"}>
        <Typography>Typography</Typography>
      </Badge>
    </Stack>
  );
};

export default DotBagde;
