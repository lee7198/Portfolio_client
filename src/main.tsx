import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <canvas id="confetti_canvas" style={{ display: "none" }}></canvas>
  </React.StrictMode>
);
