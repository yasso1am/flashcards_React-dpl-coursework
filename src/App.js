import React, { Component } from 'react';
import './App.css';
import List from './List';
import CardForm from './CardForm';

class App extends Component {
  state = {
    cards: [
      { subject: 'Programming', question: 'Will I ever learn this?', answer: 'Absolutely, just trust us' },
      { subject: 'Climbing', question: 'Will this ever matter again?', answer: 'Probably not' },
    ]
  }
  render() {
    const {cards} = this.state

    return (
      <div className="container">
        <h1 className="App-title">React Flash Cards</h1>
          <p className="App-intro">
            I'm learning to use React by building another flash card app.
          </p>
          <CardForm />
          <hr />
        <br />
        <List cards = {cards} ></List>
      </div>
    );
  }
}

export default App;
