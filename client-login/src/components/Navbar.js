import React from "react";
import { Router, Link } from "react-router-dom";
import { history } from "../helpers/history";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <Router history={history}>
                <Link to={"/chat"} className="nav-link">
                  Chat Wizard
                </Link>
          </Router>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item float-right">
            <Router history={history}>
                <Link to={"/login"} className="nav-link">
                  Logout
                </Link>
          </Router>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
