import React, { Component } from 'react';
import './Main.css';
import Popup from '../Popup/Popup.js';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      openPopup: false
    }
  }

  _openPopup(){
    this.setState({
      openPopup: !this.state.openPopup
    });
  }

  render() {
    return (
      <main>
        <button onClick={this._openPopup.bind(this)}>팝업열기</button>
        { this.state.openPopup ? <Popup  closePopup={this._openPopup.bind(this)}/> : null }

      </main>
    );
  }
}

export default Main;
