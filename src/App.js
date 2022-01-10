import React from "react";
import "./App.css";
import About from "./components/About.jsx";
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";

function App() {
  return (
    <div className="container">
      <About />
      <Particles options={particlesOptions} />
    </div>
  );
}

export default App;
