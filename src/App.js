import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import ChildFolder from "./Components/ChildFolder";
import MainFolder from "./Components/MainFolder";

import "./index.css";

function App() {
  const [post, setPost] = useState("");
  const [folders, setFolders] = useState(
    () => JSON.parse(localStorage.getItem("folders")) || []
  );
  useEffect(() => {
    localStorage.setItem("folders", JSON.stringify(folders));
  }, [folders]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/child/:id"
          element={
            <ChildFolder
              setFolders={setFolders}
              folders={folders}
              post={post}
              setPost={setPost}
            />
          }
        />
        <Route
          path="/"
          element={
            <MainFolder
              setFolders={setFolders}
              folders={folders}
              post={post}
              setPost={setPost}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
