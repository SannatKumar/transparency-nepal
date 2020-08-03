import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://nepalcorona.info/api/v1/data/nepal")
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
        <div className="App">
          <table className = "table table-striped" id="coronaresultdisplay" aria-labelledby="tabelLabel">
              <tr>
                <th>Projects</th>
                <th>Link</th>
              </tr>
              <tr>
                <td>Nepal Corona Virus Result</td>
                <td>{items.tested_positive}</td>               
              </tr>          
            </table>    
        </div>
      );
    }
  }
}

export default App;