import React from "react";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          
          This project was coded by{" "}
          <a
            href="https://www.guguqueen.io/" target="_blank" rel="noopener noreferrer">
            guguqueen
          </a>{" "}
          and is{" "}
          <a href="https://github.com/guguqueen/react-weather-app" target="_blank" rel="noopener noreferrer">
           open-sourced on Github </a>
            {" "}
            and{" "}
          <a href="https://creative-nougat-678ad2.netlify.app/"target="_blank" rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

