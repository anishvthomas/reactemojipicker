import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div>
            <span role="img" aria-label="cat"> 😺 </span> Emoji Search <span role="img" aria-label="cat"> 😼</span>
        </div>
      </div>
    );
  }
}

export default Header;
