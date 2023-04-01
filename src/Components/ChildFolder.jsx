import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import AlertDialogSlide from "./Modal/ChildAddModal";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import { Link } from "react-router-dom";
import DeleteModal from "./Modal/DeleteModal";
import ChildDeleteModal from "./Modal/ChildDeleteModal";

const ChildFolder = ({ folders, setFolders, setPost, post }) => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();

  const list = folders.filter((v) => +id === v.parentId);

  // const developer = folders.find((v) => +id === v.id);
  console.log(list, "77");

  const ChildFolderAdd = () => {
    setFolders([{ post, id: Date.now(), parentId: +id }, ...folders]);
    setPost("");
    setOpen(false);
  };

  // const handleDelete = (id) => {
  //   setDeleteId(id);
  //   setOpen1(true);
  // };

  // const deleteFolder = (id) => {
  //   setFolders(folders.filter((items) => items.id !== deleteId));
  //   setOpen1(false);
  // };

  return (
    <Container>
      <Box display="flex" alignItems="center" mt="10px">
        <Link to="/">
          <ArrowCircleLeftIcon
            sx={{ fontSize: "36px", color: "#6675ff", mr: "10px" }}
          />
        </Link>
        <AlertDialogSlide
          ChildFolderAdd={ChildFolderAdd}
          setOpen={setOpen}
          open={open}
          post={post}
          setPost={setPost}
        />
      </Box>

      <Box
        sx={{
          border: "3px solid #282828",
          padding: "10px",
          borderRadius: "10px",
          mt: "20px",
        }}
      >
        <Grid container spacing={4}>
          {list.map((item) => (
            <Grid item xs={1} key={item.id} textAlign="center">
              <Box>
                <FolderIcon
                  sx={{ color: "red", fontSize: "70px", cursor: "pointer" }}
                />
                <Typography variant="h6">{item.post}</Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                {/* <ChildDeleteModal onClick={() => handleDelete(item.id)} /> */}
                <BorderColorIcon />
                {/* <BorderColorIcon
                  onClick={() => handleEdit(item.id)}
                  sx={{ cursor: "pointer", ml: "6px" }}
                /> */}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
export default ChildFolder;
