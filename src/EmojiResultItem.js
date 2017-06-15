import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EmojiResultItem.css';

class EmojiResultItem extends Component {
    handleClick=()=>{
    this.props.selectEmoji(this.props.symbol);
    }

  render() {
    return (
      <div className="EmojiResultItem">
        <div onClick={this.handleClick} >
        <span className="symbol">{this.props.symbol}</span>
        <span className="item">{this.props.name}</span>
        </div>
      </div>
    );
  }
}

EmojiResultItem.propTypes = {
    symbol:PropTypes.string,
    name:PropTypes.string
}

export default EmojiResultItem;
