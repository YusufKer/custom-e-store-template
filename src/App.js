import React from 'react';
import './App.css';
//importing components
import Navbar from "./components/re-use/Navbar"
import Header from "./components/re-use/Header"

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <div>Just some testing text</div>
    </div>
  );
}

export default App;
