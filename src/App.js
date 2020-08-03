import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CoronaResult from './CoronaResult';
import OsResult from './OsResult';
import PortFolio from './PortFolio';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div class="container">
            <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/coronaresult/">Nepal Corona Result</Link>
            </li>
            <li>
              <Link to="/osresult/">Click to see your operating system</Link>
            </li>
            <li>
              <Link to="/portfolio/">My Portfolio</Link>
            </li>
          </ul>
        </nav>
        <Route path="./home" exact component={App} />
        <Route path="/coronaresult" exact component={CoronaResult} />
        <Route path="/osresult" exact component={OsResult} />
        <Route path="/portfolio" exact component={PortFolio} />

      </div>
    </Router>
        </div>
    );
}
}


export default App;