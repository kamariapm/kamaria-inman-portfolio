import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div class="container" style={containerStyle}>
          <h1 style={fontStyling}>Hello World!</h1>
        </div>
      </div>
    );
  }
}

const containerStyle = {
  width: "60%",
  marginTop: "6%"
};

const fontStyling = {
  fontWeight: "900",
  fontSize: "60px"
};

export default Header;
