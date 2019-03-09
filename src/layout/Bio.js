import React, { Component } from "react";

class Bio extends Component {
  render() {
    return (
      <div className="Bio" style={bioDiv}>
        Hi, I'm Kamaria (pronounced "Kuh-mah-ree-yah"). I currently reside in
        Atlanta, GA, where I am enrolled in City of Refuge's Tech Academy,
        studying MERN stack web development. I have a bachelor's degree in
        psychology and a professional background primarily in higher education,
        where I worked as an administrative assistant and an academic advisor. I
        am thrilled about starting a career as a developer!
      </div>
    );
  }
}

const bioDiv = {
  width: "40%",
  height: "75%",
  marginLeft: "45%",
  textAlign: "justify",
  marginTop: "6%"
};

export default Bio;
