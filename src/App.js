import React from 'react';
import logo from './logo.svg';
import './App.css';
import Isa from './components/Isa'
import About from './components/About'
import NavigationBar from './components/NavigationBar'
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Background from "./seattle2.jpg";


function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Isa></Isa>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
