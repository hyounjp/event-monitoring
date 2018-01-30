import React, { Component } from 'react';
import './Popup.css';

class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <button className="btn-close" onClick={this.props.close}></button>
        <span>{this.props.contents}</span>
      </div>
    );
  }
}

export default Popup;
