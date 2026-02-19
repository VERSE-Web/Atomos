import React from "react";
import logo from "./Assets/logo.png"
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <img src={logo} alt="Atomos logo" width="250" />

      <h1>Running Atomos</h1>
      <p>
        Atomos was inspired by Vite. It was made with Vite in an effort to see
        less of Vite's bloated file system.
      </p>
    </div>
  );
}
