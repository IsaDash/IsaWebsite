import React from 'react';
import logo from './logo.svg';
import './App.css';
import Isa from './components/Isa'
import About from './components/About'
import NavigationBar from './components/NavigationBar'
import Skills from './components/Skills';
import Work from './components/Work';
// import Background from "./seattle2.jpg";


function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Isa></Isa>
      <About></About>
      <Skills></Skills>
      <Work></Work>
    </div>
  );
}

export default App;
