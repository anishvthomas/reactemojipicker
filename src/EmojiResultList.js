import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import './EmojiResultList.css';
import EmojiResultItem from './EmojiResultItem.js';

class EmojiResultList extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            searchText:''
                }
    }
    handleSelect=(e)=>{
        this.props.changeEmojiSelection(e);
    }


  render() {
    return (
      <div className="EmojiResultList">
        <div>
        {this.props.resultList.map((emojiItem)=>{
            return (<EmojiResultItem key={emojiItem.name}
                name={emojiItem.name}
                symbol={emojiItem.symbol} selectEmoji={this.handleSelect} />)
        })}
        </div>
      </div>
    );
  }
}
EmojiResultList.propTypes = {
    resultList:PropTypes.array.isRequired
}
export default EmojiResultList;
