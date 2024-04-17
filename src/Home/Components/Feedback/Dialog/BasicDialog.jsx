
import React, { Fragment } from "react";


import AddIcon from "@mui/icons-material/Add";
import { Avatar, Button, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "nms-creative-ui";


const emails = ["username@gmail.com", "user02@gmail.com"];

const BasicDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button onClick={handleClickOpen}>Basic</Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Set backup account</DialogTitle>
        <List sx={{ pt: 0 }}>
          {emails.map((email) => (
            <ListItem disableGutters key={email}>
              <ListItemButton onClick={() => handleListItemClick(email)}>
                <ListItemAvatar>
                  <Avatar src="/avatars/Avatar 1.svg" />
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disableGutters>
            <ListItemButton
              autoFocus
              onClick={() => handleListItemClick("addAccount")}
            >
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Add account" />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    </Fragment>
  );
};

export default BasicDialog;
