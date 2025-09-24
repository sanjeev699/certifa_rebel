import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeroSection from "./components/HeroSection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeroSection />
  </React.StrictMode>
);
