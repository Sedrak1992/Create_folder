import * as React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  post,
  setPost,
  addNewFolder,
  open,
  handleClickOpen,
  setOpen,
}) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Button onClick={handleClickOpen} variant="contained">
        Add new folder
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle> Create folder </DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" sx={{ p: "10px" }}>
            <TextField
              id="outlined-basic"
              label="folder name"
              variant="outlined"
              fullWidth
              value={post}
              sx={{ mr: "10px" }}
              onChange={(e) => setPost(e.target.value)}
            />
            <Box display="flex" justifyContent="flex-end">
              <Button
                onClick={addNewFolder}
                variant="contained"
                sx={{ width: "20px", mt: "10px" }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
