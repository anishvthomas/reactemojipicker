import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    /*constructor(props)
    {
        super(props);
        this.state = {
            searchText:''
                }
    }*/
    handleChange=(event) => {
        //this.setState({searchText:event.target.value});
        //console.log("this.state.searchText- >"+this.state.searchText);
        this.props.searchChange(event.target.value);
    }
  render() {
    return (
      <div className="SearchBox">
        <div>
            <input type="text" value={this.searchText} onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default SearchBox;
