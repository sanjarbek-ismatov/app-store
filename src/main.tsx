import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app" element={<About />} />
      </Routes>
    </BrowserRouter>
  </>
);
