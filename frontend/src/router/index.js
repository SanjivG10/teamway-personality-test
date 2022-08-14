import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Home from "./../pages/splash"
import Start from "./../pages/start"
import Finish from "./../pages/finish"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/finish" element={<Finish />} />
        <Route path="/start" element={<Start />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}