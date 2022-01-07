import React from 'react';
import './App.css';
import ParticlesContainer from "./components/ParticlesContainer.jsx";
import About from "./components/About.jsx";

function App() {

    return (
        <div className='container'>
          <About/>
          <ParticlesContainer/>  
        </div>
      );
}
   
export default App;