import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Header/Nav'
import './App.css';
import { Button, Segment, Image, List, Grid } from 'semantic-ui-react';
import Contacts from './Contacts/Contacts';

class App extends Component {
 
  render() {
    return (
      <div className="App">
         <Nav />
         <Contacts />
      </div>

    );
  }
}

export default App;
