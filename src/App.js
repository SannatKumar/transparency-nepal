import React from "react";


class App extends React.Component {
  render() {
    return (
      <div className = "Main">
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
