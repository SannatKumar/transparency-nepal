import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import rajkumar from "./rajkumar.jpg";
import './PortFolio.css';

class PortFolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <div className="Header">
          <Navbar bg="white" variant="white">
            <Navbar.Brand href="#home">
              <div className="pic-title">
                <img src={rajkumar} className="profile-pic" alt="rajkumar" />
                <br />
                <br />
                <h2 className="username">Raj Kumar Tiwari</h2>
              </div>
            </Navbar.Brand>
          </Navbar>
        </div>

        <div className="portbody">
          <div class="row">
            <div class="column">
              <div class="content">
                <h3>Bachelor Degree In Information Technology</h3>
                <p>
                  Turku University of Applied Sciences 
                </p>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <h3>Bachelor Degree In Humanities</h3>
                <p>
                  Tri-chandra College(T.U.)
                </p>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <h3>PHP Websites</h3>
                <p>
                 Links <br />
                 Links<br />
                </p>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <h3>Skills</h3>
                <p>
                  PHP, React, ASP.NET core 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortFolio;
