import React from "react";
import logo from "./Assets/logo.png"
import "./App.css";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white gap-2">
      <img src={logo} alt="Atomos logo" width={"250"} />

      <h1 className="text-4xl">Running Atomos</h1>
      <h3 className="text-3xl">(Run By Vite + Tailwind)</h3>
      <p className="text-xl text-center ">
        Atomos was inspired by Vite. It was made with Vite in an effort to see
        less of Vite's bloated file system.
      </p>
    </div>
  );
}
