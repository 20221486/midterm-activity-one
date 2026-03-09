import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "/app";
import "./app.css";

import Home from "/src/pages/Home";
import Students from "/src/pages/Students";
import About from "/src/pages/About";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<Students />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>,
);
