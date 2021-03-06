import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Kamaria Inman{""}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/bio" className="nav-link">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/experience" className="nav-link">
                  {" "}
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
