// import React, { Component } from 'react';
// import logo from './logo.svg';
import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import { About } from './About';
import { Nav } from './Nav';
import { Contact } from './Contact';
import { Projects } from './Projects';
// import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div>
      <Nav />
      <About />
      </div>
    );
  }
}

export default App;
