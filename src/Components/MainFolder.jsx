import React, { useState, useEffect } from "react";

import FolderIcon from "@mui/icons-material/Folder";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AlertDialogSlide from "./mayModal";
import { Link } from "react-router-dom";
import DeleteModal from "./Modal/DeleteModal";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button } from "bootstrap";

const MainFolder = ({ setFolders, folders }) => {
  const [post, setPost] = useState("");
  const [editId, setEditId] = useState(0);
  const [deleteId, setDeleteId] = useState(0);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
 

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
  const handleEdit = (id) => {
    const editTask = folders.find((i) => i.id === id);
    setPost(editTask.post);
    setEditId(id);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    // const f = folders.find((obj) => obj.id !== id);
    // setPost(f.post);
    // setDeleteId(id);
    setOpen1(true);
  };

  const deleteFolder = (id) => {
    console.log(deleteId);
    setFolders(folders.filter((items) => items.id !== deleteId));
    setOpen1(false);
  };

  return (
    <div>
      <Container>
        <Box sx={{ my: "20px" }}>
          <AlertDialogSlide
            post={post}
            open={open}
            setOpen={setOpen}
            setPost={setPost}
            addNewFolder={addNewFolder}
          />
          <DeleteModal
            deleteFolder={deleteFolder}
            open1={open1}
            setOpen1={setOpen1}
            handleDelete={handleDelete}
          />
        </Box>
        <Box
          sx={{
            border: "3px solid #282828",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <Grid container spacing={4}>
            {folders.map((item) => (
              <Grid item xs={1} key={item.id} textAlign="center">
                <Box>
                  <Link to="/bb">
                    <FolderIcon
                      sx={{ color: "red", fontSize: "70px", cursor: "pointer" }}
                    />
                  </Link>

                  <Typography variant="h6">{item.post}</Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                  <HighlightOffIcon onClick={() => handleDelete(item.id)} />
                  {/* <button onClick={() => handleDelete(item.id)}>ddd</button> */}
                  <BorderColorIcon
                    onClick={() => handleEdit(item.id)}
                    sx={{ cursor: "pointer", ml: "6px" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default MainFolder;
