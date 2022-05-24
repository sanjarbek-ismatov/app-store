import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import { Provider } from "react-redux";
import { store } from "./state/redux";
ReactDOM.createRoot(document.getElementsByClassName("container")[0]!).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/app" element={<About />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </>
);
