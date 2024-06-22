import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Stories from "../Pages/Stories";
import About from "../Pages/About";
import Disclaimer from "../Pages/Disclaimer";
import Policies from "../Pages/Policies";
import Feedback from "../Pages/Feedback";
import FAQ from "../Pages/Faq";
import EssentialPoints from "../Pages/EssentialPoints";

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Stories />} />
        <Route path="/about" element={<About />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/essential-points" element={<EssentialPoints />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
