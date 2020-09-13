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
            <div className="introductionnav">
              <div className="pic-title">
                <img src={rajkumar} className="profile-pic" alt="rajkumar" />
                </div>
               <div className = "userbio">
                
                <h2 className="username">Raj Kumar Tiwari</h2>
                <p id="biodetail">I am an Information Technology graduate from Turku University of Applied Sciences.
                  <br />I am a Web App developer looking for a Job. You can check my Projects in the below mentioned link.
                  Hobbies: Swimming, Singing, Coding, Cooking. 
                </p>
                
              </div>
              </div>
             
     
              
            </Navbar.Brand>
          </Navbar>
        </div>
        

        <div className="portbody" id ="portbody">
          <h2>Education</h2>
          <p>Bachelors Degree in Information Technology</p>
          <p>Bachelors Degree in Humanities</p>
          <p>Country: Nepal</p>
          <p>Male</p>
                    
          
          </div>
          </div>
        
    );
  }
}

export default PortFolio;
