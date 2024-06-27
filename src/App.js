

import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather app</h1>
      <weather defaultcity = "New York"/>
    <footer>
      This project was coded by guguqueen and is {" "}
    <a href="https://github.com/guguqueen/react-weather-app"  > open-sourced on Github </a>
    </footer>
    </div>
    </div>
  );
}
