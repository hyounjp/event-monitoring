import React, { Component } from 'react';
import './App.css';
import Leftmenu from './Leftmenu/Leftmenu.js';
import Main from './Main/Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Leftmenu />
        <Main />
      </div>
    );
  }
}

export default App;
