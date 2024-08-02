import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PatientsProvider } from "./componenets/apiContext/data.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./componenets/dashboard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PatientsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/pi/:id" element={<DashBoard />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PatientsProvider>
  </React.StrictMode>
);
