import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar} from 'react-bootstrap';
import rajkumar from './rajkumar.jpg';


class PortFolio extends React.Component{
    render(){
      return (
      <div className = "portfolio">
        <div className = "Header">      
            <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                    <div className = "pic-title">
                        <img src={rajkumar} className="profile-pic" alt="rajkumar" />
                        <br /><br />
                        <h2 className = "username">Raj Kumar Tiwari</h2>
                    </div>
                    </Navbar.Brand>
                </Navbar>
        </div>

        <div className= "portbody">
        <h1>MYLOGO.COM</h1>
       
            <h2>PORTFOLIO</h2>
            <p>This is my Portfolio.</p>
        </div>

      </div>
  );
  
}
}

export default PortFolio;