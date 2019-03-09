import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Bio from "./layout/Bio";
import Headshit from "./layout/Headshot";

import "./App.css";
import Headshot from "./layout/Headshot";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Header />
          <Bio />
          <Headshot />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
