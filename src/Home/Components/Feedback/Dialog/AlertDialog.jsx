import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "nms-creative-ui";
import React, { Fragment } from "react";


const AlertDialog = () => {
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClickOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <Fragment>
      <Button onClick={handleClickOpenAlert}>Alert</Button>

      <Dialog open={openAlert} onClose={handleCloseAlert} fullWidth>
        <DialogTitle>
          <Typography variant="h4">Use Google's location Service?</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button variant="text" onClick={handleCloseAlert}>
            Cancel
          </Button>
          <Button onClick={handleCloseAlert}>Agree</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default AlertDialog;
