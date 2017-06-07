import React, { Component } from 'react';
//import './EmojiResultList.css';

class EmojiResultItem extends Component {

  render() {
    return (
      <div className="EmojiResultItem">
        <div>{this.props.name}
        {this.props.symbol}
        </div>
      </div>
    );
  }
}

export default EmojiResultItem;
