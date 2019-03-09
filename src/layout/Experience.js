import React, { Component } from "react";
import javascriptLogo from "../img/javascript.png";
import htmlLogo from "../img/html.png";
import bootstrapLogo from "../img/bootstrap.png";
import cssLogo from "../img/css.png";
import expressLogo from "../img/express.png";
import mlabLogo from "../img/mlab.png";
import mongodbLogo from "../img/mongodb.png";
import mongooseLogo from "../img/mongoose.png";
import nodeLogo from "../img/node.png";
import pugLogo from "../img/pug.jpg";
import reactLogo from "../img/react.png";
import githubLogo from "../img/github.png";

class Experience extends Component {
  render() {
    return (
      <div
        id="experience"
        className="Experience"
        style={containerExperienceStyle}
      >
        <h1 style={{ textAlign: "center" }}>EXPERIENCE</h1>
        <div className="container">
          <img src={htmlLogo} alt=" " />
          <img src={cssLogo} alt=" " />

          <img src={javascriptLogo} alt=" " />
          <img src={bootstrapLogo} alt=" " />

          <img src={reactLogo} alt=" " />
          <img src={pugLogo} alt=" " style={{ borderRadius: "25px" }} />

          <img src={githubLogo} alt=" " />
          <img src={nodeLogo} alt=" " />

          <img src={mongooseLogo} alt=" " />
          <img src={expressLogo} alt=" " />

          <img src={mongodbLogo} alt=" " />
          <img src={mlabLogo} alt=" " />
        </div>
      </div>
    );
  }
}

const containerExperienceStyle = {
  marginTop: "6%",
  marginLeft: "-2%",
  padding: "2%"
};

export default Experience;
