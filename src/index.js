import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


