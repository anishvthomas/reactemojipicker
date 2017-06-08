import React, { Component } from 'react';
import './EmojiResultItem.css';

class EmojiResultItem extends Component {

  render() {
    return (
      <div className="EmojiResultItem">
        <div >
        <span className="symbol">{this.props.symbol}</span>
        <span className="item">{this.props.name}</span>
        </div>
      </div>
    );
  }
}

export default EmojiResultItem;
