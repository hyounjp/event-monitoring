import React, { Component } from 'react';
import './Main.css';
import Popup from '../Popup/Popup.js';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      popup : false
    }
  }

  _openPopup(){
    this.setState({
      popup: true
    });
  }

  _closePopup(){
    this.setState({
      popup: false
    });
  }

  render() {
    return (
      <main>
        <button onClick={this._openPopup.bind(this)}>버튼</button>
        { this.state.popup ? <Popup close={this._closePopup.bind(this)} contents="팝업내용"/> : null }

      </main>
    );
  }
}

export default Main;
