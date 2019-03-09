import React, { Component } from "react";
import headshot from "./KInman.jpg";

class Headshot extends Component {
  render() {
    return (
      <div className="Headshot">
        <img src={headshot} alt=" " style={imageStyle} />
      </div>
    );
  }
}

const imageStyle = {
  borderRadius: "50%",
  marginRight: "55%",
  marginTop: "-16%"
};

export default Headshot;
