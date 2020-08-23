import React from "react";


class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      email:null,
      password:null,
      login:false,
      store:null,
    }
  }
  login(){
    fetch('http://127.0.0.5000/api/login',{
      method:"POST",
      body:JSON.stringify(this.state)
      }).then((response)=>{
        response.json().then((result)=>{
          console.warn("result", result);
          localStorage.setItem('login',JSON.stringify({
            login:true,
            token:result.token
          }))
        })
      })
  }
  render() {
    return (
      <div className = "Main">
      <div className = "LoginDiv">
      <input type="text" onChange={(event)=>{this.setState({email:event.target.value})}} /> <br /><br />
      <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}} /> <br /><br />
      <button onClick={() => {this.login()}} >Login</button>
      </div>
      <div className="CoronaResult">
            <table className = "table table-striped" id="coronaresultdisplay" aria-labelledby="tabelLabel">
                <tr>
                  <th>Headers</th>
                  <th>Data</th>
                </tr>
                <tr>
                  <td>Projects</td>
                  <td>Links</td>               
                </tr>
                <tr>
                  <td>PHP</td>
                  <td>Links</td>              
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>Sununtai</td>              
                </tr>
                <tr>
                  <td>Monday</td>
                  <td>Manantai</td>              
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>Tiistai</td>              
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>Keskivikko</td>              
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>Torstai</td>              
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>Perjantai</td>              
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>Launtai</td>              
                </tr>            
              </table>    
          </div>
          </div>
    );
  }
}

export default App;
