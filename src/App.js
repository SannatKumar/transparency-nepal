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
        
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">JagratNepal.Com</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item nav-link active">
      <Link to="/">Home</Link>
      </li>
      <li class="nav-item nav-link">
      <Link to="/coronaresult/">Nepal Corona Result</Link>
      </li>
      <li class="nav-item nav-link">
      <Link to="/osresult/">Your OS</Link>
      </li>
      <li class="nav-item nav-link">
      <Link to="/portfolio/">My Portfolio</Link>
      </li>
    </ul>
  </div>
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