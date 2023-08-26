import React from "react";
import ReactDOM from "react-dom/client";

import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "./style/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
    />
    <App />
  </React.StrictMode>
);
