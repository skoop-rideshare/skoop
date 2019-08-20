import React from 'react';
import logo from './logo.svg';
import LoginScreen from './login/LoginScreen.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginScreen />
      </header>
    </div>
  );
}

export default App;
