import React from 'react';
import logo from './logo.svg';
import HomeScreen from './home/HomeScreen.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HomeScreen />
      </header>
    </div>
  );
}

export default App;
