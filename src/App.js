import React, { Component } from 'react';
import './App.css';
import Header from'./header'
import MainH from './mainH.js'
import FSection from './FSection';
import SSection from './SSection';
import State from './State';
import Office from './Office'
import Footer from './Footer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainH/>
        <FSection/>
        <SSection/>
        <State/>
        <Office />
        <Footer/>
      </div>
      
    );
  }
}

export default App;
