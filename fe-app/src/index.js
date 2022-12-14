import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import App from "./App";
import Dowenload from "./Dowenload";
import reportWebVitals from "./reportWebVitals";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Voice from "./Voice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<App />} />
      <Route path="/dowenload" element={<Dowenload />} />
      <Route path="/voice" element={<Voice />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
