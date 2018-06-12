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
    console.log(name)
  }

  handleSubmit = (e) => {
    debugger
    e.preventDefault();
    this.props.addCard(this.state.subject, this.state.question, this.state.answer)
    this.setState({ subject: '', question: '', answer: '' })
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
          <button
            onClick={this.handleSubmit}> 
            Submit </button>
      </form>
    )
  }

}

export default CardForm;