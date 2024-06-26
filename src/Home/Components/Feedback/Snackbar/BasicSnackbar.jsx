
import { Icon, IconButton, SnackbarContent, Stack } from "nms-creative-ui";
import { Fragment } from "react";
import * as SolarIconSet from "solar-icon-set";

const BasicSnackbar = () => {
  //info action
  const info = (
    <Fragment>
      <IconButton size="medium" aria-label="close" severity="info" color="info">
        <SolarIconSet.CloseCircle fontSize={24} />
      </IconButton>
    </Fragment>
  );

  //warning action
  const warning = (
    <Fragment>
      <IconButton size="medium" aria-label="close" color="warning">
        <SolarIconSet.CloseCircle fontSize={24} />
      </IconButton>
    </Fragment>
  );

  //error action
  const error = (
    <Fragment>
      <IconButton size="medium" aria-label="close" color="error">
        <SolarIconSet.CloseCircle fontSize={24} />
      </IconButton>
    </Fragment>
  );

  //success action
  const success = (
    <Fragment>
      <IconButton size="medium" aria-label="close" color="success">
        <SolarIconSet.CloseCircle fontSize={24} />
      </IconButton>
    </Fragment>
  );

  return (
    <Stack direction="column" spacing={2}>
      <SnackbarContent
        message="This is an info message!"
        severity="info"
        color="info"
        icon={
          <Icon color="info">
            <SolarIconSet.InfoSquare size={24} iconStyle="BoldDuotone" />
          </Icon>
        }
        action={info}
      />

      <SnackbarContent
        message="This is warning message!"
        severity="warning"
        color="warning"
        icon={
          <Icon color="warning">
            <SolarIconSet.DangerTriangle size={24} iconStyle="BoldDuotone" />
          </Icon>
        }
        action={warning}
      />

      <SnackbarContent
        message="Internal server error."
        severity="error"
        color="error"
        icon={
          <Icon color="error">
            <SolarIconSet.DangerCircle size={24} iconStyle="BoldDuotone" />
          </Icon>
        }
        action={error}
      />

      <SnackbarContent
        message="This is a success message!"
        severity="success"
        color="success"
        icon={
          <Icon color="success">
            <SolarIconSet.DangerCircle size={24} iconStyle="BoldDuotone" />
          </Icon>
        }
        action={success}
      />
    </Stack>
  );
};

export default BasicSnackbar;
