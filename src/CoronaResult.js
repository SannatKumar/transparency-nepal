import React from 'react';
import './CoronaResult.css';

class CoronaResult extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: {},
        isLoaded: false,
      };
    }
    componentDidMount() {
      fetch("https://data.nepalcorona.info/api/v1/covid")
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            isLoaded: true,
            items: json,
          });
        });
    }
  
    render() {
      var { isLoaded, items } = this.state;
      console.log(this.state.items);
  
      if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="CoronaResult">
            <table className = "table table-striped" id="coronaresultdisplay" aria-labelledby="tabelLabel">
                <tr>
                  <th>Headers</th>
                  <th>Data</th>
                </tr>
                <tr>
                  <td>Corona Virus Tested Positive in Nepal</td>
                  <td>{items.length}</td>               
                </tr>
                <tr>
                  <td>Corona Virus Tested Negative in Nepal</td>
                  <td>{items.tested_negative}</td>              
                </tr>
                <tr>
                  <td>Tested Total</td>
                  <td>{items.tested_total}</td>              
                </tr>
                <tr>
                  <td>Corona Virus in Isolation in Nepal</td>
                  <td>{items.in_isolation}</td>              
                </tr>
                <tr>
                  <td>Corona Virus Quarantined In Nepal</td>
                  <td>{items.quarantined}</td>              
                </tr>
                <tr>
                  <td>Corona Virus Tested RDT</td>
                  <td>{items.tested_rdt}</td>              
                </tr>
                <tr>
                  <td>Corona Virus Pending Result</td>
                  <td>{items.pending_result}</td>              
                </tr>
                <tr>
                  <td>Corona Virus Recovered</td>
                  <td>{items.recovered}</td>              
                </tr>
                <tr>
                  <td>Corona Virus Deaths</td>
                  <td>{items.deaths}</td>              
                </tr>            
              </table>    
          </div>
        );
      }
    }
  }

  export default CoronaResult;