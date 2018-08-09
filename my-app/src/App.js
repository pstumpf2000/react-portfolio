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
  constructor () {
    super()
    this.toggleSection = this.toggleSection.bind(this)
    this.state = {showAbout: 'none', showProject: 'none', showContact:'none'}
  }
  toggleSection (e) {
    var navIndex = e
    console.log(e);
    var arr = []
    arr = navIndex.toString().split("")
    switch (arr[arr.length - 1]) {
      case '0': this.setState({showAbout: 'block', showProject: 'none', showContact: 'none'})
      break;
      case '1':this.setState({showAbout: 'none', showProject: 'block', showContact: 'none'})
      break;
      case '2':this.setState({showAbout: 'none', showProject: 'none', showContact:'block'})
      break;
      default: ''
    }
  }
  render() {
      console.log(this.state.showAbout,'showAbout');
    return (
      <div>
      <Nav handleSection = {this.toggleSection} />
      <About show={this.state.showAbout}/>
      <Projects show={this.state.showProject}/>
      <Contact show={this.state.showContact}/>
      </div>
    );
  }
}



export default App;
