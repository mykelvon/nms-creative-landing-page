import { useMediaQuery } from "@mui/material";
import { Button, Icon, IconButton, Stack } from "nms-creative-ui";
import { useSnackbar } from "notistack";
import { Fragment } from "react";

import * as SolarIconSet from "solar-icon-set";
const OpenSnackbar = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  
    const isMobile = useMediaQuery("(max-width:600px)");
  
    const handleButtonSuccess = () => {
      enqueueSnackbar("Success Snackbar", {
        variant: "success",
        autoHideDuration: 3000,
        action: (key) => (
          <IconButton
            color="success"
            size="medium"
            aria-label="close"
            severity="success"
            onClick={() => closeSnackbar(key)}
          >
            <SolarIconSet.CloseCircle fontSize={24} />
          </IconButton>
        ),
        icon: (
          <Icon color="success">
            <SolarIconSet.InfoSquare size={24} iconStyle="BoldDuotone" />
          </Icon>
        ),
        style: {
          backgroundColor: "#EFFDD6",
          color: "#59C227",
        },
      });
    };
  
    const handleButtonError = () => {
      enqueueSnackbar("Error Snackbar", {
        variant: "error",
        autoHideDuration: 3000,
        action: (key) => (
          <IconButton
            size="medium"
            aria-label="close"
            color="error"
            onClick={() => closeSnackbar(key)}
          >
            <SolarIconSet.CloseCircle fontSize={24} />
          </IconButton>
        ),
        icon: (
          <Icon
            color="error"
            size={24}
            iconStyle={"BoldDuotone"}
            solariconset={SolarIconSet.DangerCircle}
          />
        ),
        style: {
          backgroundColor: "#FEE8E2",
          color: "#D64F70",
        },
      });
    };
  
    const handleButtonInfo = () => {
      enqueueSnackbar("Info Snackbar", {
        variant: "info",
        autoHideDuration: 3000,
        action: (key) => (
          <IconButton
            size="medium"
            aria-label="close"
            color="info"
            onClick={() => closeSnackbar(key)}
          >
            <SolarIconSet.CloseCircle fontSize={24} />
          </IconButton>
        ),
  
        style: {
          backgroundColor: "#CBFEFA",
          color: "#0090CB",
        },
      });
    };
  
    const handleButtonWarning = () => {
      enqueueSnackbar("Warning Snackbar", {
        variant: "warning",
        autoHideDuration: 3000,
        action: (key) => (
          <IconButton
            size="medium"
            aria-label="close"
            color="warning"
            onClick={() => closeSnackbar(key)}
          >
            <SolarIconSet.CloseCircle fontSize={24} />
          </IconButton>
        ),
  
        style: {
          backgroundColor: "#FFF6D8",
          color: "#DB942E",
        },
      });
    };
  
    return (
      <Fragment>
        <Stack direction="row" spacing={4} sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
          <Button onClick={handleButtonSuccess} color="success">
            Success
          </Button>
          <Button onClick={handleButtonError} color="error">Error</Button>
          <Button onClick={handleButtonInfo} color="info">
            Info
          </Button>
          <Button onClick={handleButtonWarning} color="warning">
            Warning
          </Button>
        </Stack>
      </Fragment>
    );
  };
  
  export default OpenSnackbar;