import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CoronaResult from './CoronaResult';
import Home from './Home';
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
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/coronaresult/">Nepal Corona Result</Link>
            </li>
          </ul>
        </nav>
        <Route path="./home" exact component={Home} />
        <Route path="/coronaresult" exact component={CoronaResult} />

      </div>
    </Router>
        </div>
    );
}
}


export default App;