import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Factoriel from './components/factoriel';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Factoriel/>
      </div>
    );
  }
}

export default App;
