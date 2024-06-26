

import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>weather app</h1>
      <weather />
    <footer>
      This project was coded by guguqueen and is {" "}
    <a href="https://github.com/guguqueen/react-weather-app" target="_blank" > open-sourced on Github </a>
    </footer>
    </div>
    </div>
  );
}
