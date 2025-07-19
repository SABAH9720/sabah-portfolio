import React from "react";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
      <About/>
      <Experience/>
      <Projects/>
      </main>
    </div>
  );
}

export default App;
