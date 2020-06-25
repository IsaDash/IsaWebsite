import React from 'react';
import logo from './logo.svg';
import './App.css';
import Isa from './components/Isa'
import Projects from './components/Projects'
import NavigationBar from './components/NavigationBar'
// import Background from "./seattle2.jpg";


function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Isa></Isa>
      <Projects></Projects>
    </div>
  );
}

export default App;
