import React, { Component } from 'react';
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
    handleChange=(event) => {
//        this.setState({searchText:event.target.value});
//        console.log("this.state.searchText- >"+this.state.searchText);
    }
  render() {
    return (
      <div className="EmojiResultList">
        <div>
        {this.props.resultList.map((emojiItem)=>{
            return (<EmojiResultItem
                name={emojiItem.name}
                symbol={emojiItem.symbol} />)
        })}
        </div>
      </div>
    );
  }
}

export default EmojiResultList;
