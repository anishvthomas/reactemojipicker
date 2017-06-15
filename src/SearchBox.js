import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBox.css';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText:'',
            emojiSelected:''
                }
    }
    handleChange=(event) => {
        this.setState({searchText:event.target.value,emojiSelected:''});
        this.props.searchChange(event.target.value);
        //if an emjoi was selected, set that to empty once user types
        //something in the searchbox
        this.props.changeEmojiSelection('');

    }

    componentWillReceiveProps=(nextprops)=>{
        //if an emoji was selected, show it in the search box
        if(nextprops.emojiSelected)
            this.setState({emojiSelected:nextprops.emojiSelected,searchText:''});
    }

  render() {
    return (
      <div className="SearchBox">
        <div>
            <input type="text" value={this.state.searchText||this.state.emojiSelected}
            onChange={this.handleChange} placeholder="Search ..."/>
        </div>
      </div>
    );
  }
}
SearchBox.propTypes = {
    searchChange:PropTypes.func.isRequired,
    emojiSelected:PropTypes.string.isRequired,
    changeEmojiSelection:PropTypes.func.isRequired
}
export default SearchBox;
