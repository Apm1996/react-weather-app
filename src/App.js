import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather />
        <footer>
          This project is coded by Andrea Peris with ♥️
          <a href="#" target="_blank"></a>
        </footer>
      </div>
    </div>
  );
}
