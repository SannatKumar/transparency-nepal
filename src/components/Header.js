import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CoronaResult from "../CoronaResult";
import OsResult from "../OsResult";
import PortFolio from "../PortFolio";
import Blog from '../Blog';
import App from "../App";
import CoronaDetail from '../coronaresult/CoronaDetail.js';
import Login from "../containers/Login";

class Header extends React.Component {
   render(){
    return (
      <div className="Header">
          <Router>
                <Navbar bg="dark" variant="dark">
                  <Navbar.Brand href="/app">
                    <a className="navbar-brand" href="/app">
                      JagratNepal.Com
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item nav-link active" id = "home">
                          <Link to="/app/">Home</Link>
                        </li>
                        <li className="nav-item nav-link" id = "nepalcorona">
                          <Link to="/coronaresult/">Nepal Corona Result</Link>
                        </li>
                        <li className="nav-item nav-link" id = "coronadetail">
                          <Link to="/coronadetail/">Nepal Corona Map</Link>
                        </li>
                        <li className="nav-item nav-link" id = "youros">
                          <Link to="/osresult/">Your OS</Link>
                        </li>
                        <li className="nav-item nav-link" id = "myportfolio">
                          <Link to="/portfolio/">My Portfolio</Link>
                        </li>
                        <li className="nav-item nav-link" id = "blog">
                          <Link to="/blog/">Blog</Link>
                        </li>
                        <li className="nav-item nav-link" id = "login">
                          <Link to="/login">Login</Link>
                        </li>
                    </ul>
                    </div>
                  </Navbar.Brand>
                </Navbar>
              <Route path="/" exact component={App} />
              <Route path="/app" exact component={App} />
              <Route path="/coronaresult" exact component={CoronaResult} />
              <Route path="/osresult" exact component={OsResult} />
              <Route path="/coronadetail" exact component={CoronaDetail} />
              <Route path="/portfolio" exact component={PortFolio} />
              <Route path="/blog" exact component={Blog} />
              <Route path="/login" exact component={Login} />
          </Router>
        </div>
    );
  }
}

export default Header;
