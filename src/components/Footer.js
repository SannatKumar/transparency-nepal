import React from 'react'
import './Footer.css'

class Footer extends React.Component{
    render(){
  return (
    <div class="container" className = "Footer">
        <div class="row">
          <div class="col-sm">
          Contacts
          </div>
          <div class="col-sm">
          Social Media
          </div>
          <div class="col-sm">
          About Us
          </div>
          <div class="col-sm">@Software <br />
          developed in Finland </div>
        </div>
</div>
    
  );
}
}

export default Footer