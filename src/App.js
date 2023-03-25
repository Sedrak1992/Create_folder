import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import FolderIcon from "@mui/icons-material/Folder";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AlertDialogSlide from "./Components/mayModal";

import "./index.css";

function App() {
  const [folders, setFolders] = useState([{ id: 1, post: "22222" }]);
  const [post, setPost] = useState("");
  const [editId, setEditId] = useState(0);
  const [open, setOpen] = useState(false);

  const addNewFolder = (e) => {
    if (post.length > 0) {
      setFolders([{ post, id: Date.now() }, ...folders]);
      setPost("");
    }
    if (editId) {
      const editTask = folders.find((i) => i.id === editId);
      const updatedTasks = folders.map((t) =>
        t.id === editTask.id
          ? (t = { id: t.id, post })
          : { id: t.id, post: t.post }
      );
      setFolders(updatedTasks);
      setOpen(false);
      setEditId(0);
      return;
    }
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleEdit = (id) => {
    const editTask = folders.find((i) => i.id === id);
    setPost(editTask.post);
    setEditId(id);
    setOpen(true);
  };
  const handleDelete = (id) => {
    setFolders(folders.filter((obj) => obj.id !== id));
  };

  return (
    <div className="App">
      <Container>
        <Box sx={{ my: "20px" }}>
          <AlertDialogSlide
            post={post}
            open={open}
            setOpen={setOpen}
            setPost={setPost}
            handleClickOpen={handleClickOpen}
            addNewFolder={addNewFolder}
          />
        </Box>

        <Box
          sx={{
            border: "3px solid #282828",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          {folders.map((item) => (
            <Box
              key={item.id}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <FolderIcon
                  sx={{ color: "red", fontSize: "40px", cursor: "pointer" }}
                />
                <Typography variant="h6">{item.post}</Typography>
              </Box>
              <Box display="flex " justifyContent="center " alignItems="center">
                <HighlightOffIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleDelete(item.id)}
                />
                <BorderColorIcon onClick={() => handleEdit(item.id)} />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
}

export default App;
