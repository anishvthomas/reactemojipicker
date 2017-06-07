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
            filteredEmojiResults:filterEmojis('')
        }
    }

    handleSearchChange=(text)=>{
        this.setState({
            filteredEmojiResults:filterEmojis(text)
        });

    }
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox searchChange={this.handleSearchChange}/>
        <EmojiResultList resultList={this.state.filteredEmojiResults}/>
    </div>
    );
  }
}

export default App;
