import React from 'react';

class CardForm extends React.Component {
  state = {
    subject: '',
    question: '',
    answer: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({[name]:value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render () {
    const { subject, question, answer } = this.state
    
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={subject}
          name='subject'
          required
          placeholder="Subject"
          />
        <input
          onChange={this.handleChange}
          value={question}
          name='question'
          required
          placeholder="Question"
          />
        <input
          onChange={this.handleChange}
          value={answer}
          name='answer'
          required
          placeholder="Answer"
          />
      </form>
    )
  }

}

export default CardForm;