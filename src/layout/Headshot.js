import React, { Component } from "react";
import headshot from "./KInman.jpg";

class Headshot extends Component {
  render() {
    return (
      <div className="Headshot">
        <img src={headshot} className="rounded-circle" alt=" " />
      </div>
    );
  }
}

export default Headshot;
