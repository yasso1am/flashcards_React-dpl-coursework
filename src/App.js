import React, { Component } from 'react';
import './App.css';
import List from './List';
import CardForm from './CardForm';

class App extends Component {
  state = {
    cards: [
      { subject: 'Programming', question: 'Will I ever learn this?', answer: 'Absolutely - just trust us' },
      { subject: 'Climbing', question: 'Will this ever matter again?', answer: 'Negative' },
    ]
  }

  addCard = (subject, question, answer) => {
    const {cards} = this.state
    const card = { question, subject, answer, id: this.getUniqId() }
    this.setState( {cards: [card, ...cards] } )
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 10000)
  }

  render() {
    const {cards} = this.state

    return (
      <div className="container">
        <h1 className="App-title">React Flash Cards</h1>
          <p className="App-intro">
            I'm learning to use React by building another flash card app.
          </p>
          <CardForm addCard={this.addCard}/>
          <hr />
        <br />
        <List cards = {cards} />
      </div>
    );
  }
}

export default App;
