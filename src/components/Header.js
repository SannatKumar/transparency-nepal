import React from 'react'
import './Header.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar} from 'react-bootstrap';
import rajkumar from '../rajkumar.jpg';


class Header extends React.Component{
    render(){
      return (
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
  );
}
}

export default Header