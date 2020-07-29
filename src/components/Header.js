import React from 'react'
import './Header.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar} from 'react-bootstrap';


class Header extends React.Component{
    render(){
      return (
      <div className = "Header">      
        <Navbar bg="dark" variant="dark">
                  <Navbar.Brand href="#home">
                  Corona Virus Cases In Nepal
                  </Navbar.Brand>
              </Navbar>
      </div>
  );
}
}

export default Header