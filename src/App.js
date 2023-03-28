import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ChildFolder from "./Components/ChildFolder";
import MainFolder from "./Components/MainFolder";

import "./index.css";

function App() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem("folderList") || [];
    setFolders(JSON.parse(raw));
  }, []);

  useEffect(() => {
    const items = JSON.stringify(folders);
    localStorage.setItem("folderList", items);
  }, [folders]);
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/bb" element={<ChildFolder />} /> */}
        <Route
          path="/"
          element={<MainFolder setFolders={setFolders} folders={folders} />}
        />
      </Routes>
    </div>
  );
}

export default App;
