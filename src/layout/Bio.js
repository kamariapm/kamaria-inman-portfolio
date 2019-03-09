import React, { Component } from "react";
import Headshot from "./Headshot";

class Bio extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-6" style={imageStyle}>
          <Headshot />
        </div>
        <div className="col-sm-6" style={bioDiv}>
          Hi, I'm Kamaria (pronounced "Kuh-mah-ree-yah"). I currently reside in
          Atlanta, GA, where I am enrolled in City of Refuge's Tech Academy,
          studying MERN stack web development. I have a bachelor's degree in
          psychology and a professional background primarily in higher
          education, where I worked as an administrative assistant and an
          academic advisor. I am thrilled about starting a career as a
          developer!
        </div>
      </div>
    );
  }
}

const imageStyle = {
  borderRadius: "50%",
  marginLeft: "0",
  marginTop: "6%"
};

const bioDiv = {
  width: "50%",
  height: "75%",
  marginLeft: "45%",
  textAlign: "justify",
  marginTop: "-20%"
};

export default Bio;
