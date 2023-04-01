import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  ChildFolderAdd,
  setOpen,
  setPost,
  open,
  post,
}) {
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Folder
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add new folder to folders"}</DialogTitle>
        <DialogContent>
          <TextField
            sx={{ mt: "10px" }}
            fullWidth
            value={post}
            id="outlined-textarea"
            onChange={(e) => setPost(e.target.value)}
            label="Name"
            placeholder="Name"
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={ChildFolderAdd}
            variant="contained"
            sx={{ width: "20px", mt: "10px" }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
