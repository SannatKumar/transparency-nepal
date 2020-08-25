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

class Header extends React.Component {
   render()
  {
    var language = {
      eng:{
        first: "Home"
      },
      nep:{
      pahilo: "घर"
    }
    };
    if(window.location.hash){
      if(window.location.hash === "nep"){
        home.textContent = language.nep.pahilo;
      }
    }
    return (
      <div className="Header">
          <Router>
                <Navbar bg="dark" variant="dark">
                  <Navbar.Brand href="/app">
                    <a class="navbar-brand" href="/app">
                      JagratNepal.Com
                    </a>
                    <button
                      class="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <li class="nav-item nav-link active" id = "home">
                          <Link to="/app/">Home</Link>
                        </li>
                        <li class="nav-item nav-link" id = "nepalcorona">
                          <Link to="/coronaresult/">Nepal Corona Result</Link>
                        </li>
                        <li class="nav-item nav-link" id = "youros">
                          <Link to="/osresult/">Your OS</Link>
                        </li>
                        <li class="nav-item nav-link" id = "myportfolio">
                          <Link to="/portfolio/">My Portfolio</Link>
                        </li>
                        <li class="nav-item nav-link" id = "blog">
                          <Link to="/blog/">Blog</Link>
                        </li>
                        <li class="nav-item nav-link" id = "english">
                          <a href = "eng" data-reload>English</a>
                        </li>
                        <li class="nav-item nav-link" id = "nepali">
                          <a href = "nep" data-reload>Nepali</a>
                        </li>
                      </ul>
                    </div>
                  </Navbar.Brand>
                </Navbar>
              <Route path="/" exact component={App} />
              <Route path="/app" exact component={App} />
              <Route path="/coronaresult" exact component={CoronaResult} />
              <Route path="/osresult" exact component={OsResult} />
              <Route path="/portfolio" exact component={PortFolio} />
              <Route path="/blog" exact component={Blog} />
          </Router>
        </div>
    );
  }
}

export default Header;
