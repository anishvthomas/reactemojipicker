import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox.js';
import Header from './Header.js';
import EmojiResultList from './EmojiResultList.js';
import filterEmojis from './filterEmojis.js';

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            filteredEmojiResults:filterEmojis(''),
            selectedEmoji:''
        }
    }

    handleSearchChange=(text)=>{
        this.setState({
            filteredEmojiResults:filterEmojis(text)
        });

    }

    handleEmojiSelection=(e)=>
    {
        this.setState({selectedEmoji:e});
    }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox searchChange={this.handleSearchChange} emojiSelected={this.state.selectedEmoji}
        changeEmojiSelection={this.handleEmojiSelection}/>
        <EmojiResultList resultList={this.state.filteredEmojiResults}
        changeEmojiSelection={this.handleEmojiSelection}/>
    </div>
    );
  }
}

export default App;
