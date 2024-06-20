import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Stories from "../Pages/Stories";

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Stories" element={<Stories />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
