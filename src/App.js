import React, { Component } from 'react';
import {CardDeck} from './components/card';
import {Container} from './components/Grid';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <CardDeck/>
      </Container>
    );
  }
}

export default App;
