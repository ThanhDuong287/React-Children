import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Accordion from './components/Accordion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion heading="Header" >
          Zero 4 Sergio Ramos
        </Accordion>
      </div>
    );
  }
}

export default App;
