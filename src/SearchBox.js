import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {

    handleChange=(event) => {
        this.props.searchChange(event.target.value);
    }
  render() {
    return (
      <div className="SearchBox">
        <div>
            <input type="text" value={this.searchText} onChange={this.handleChange} placeholder="Search ..."/>
        </div>
      </div>
    );
  }
}

export default SearchBox;
