import React, { Component } from 'react';
import FormGenerator from './Component/FormGenerator'
import './App.css';

class App extends Component {
  state = {
    text: '',
    date: '',
    number: ''

  }
  form_data = [
    {
      label: 'What is the name of the officer in question?',
      type: 'text',
    },
    {
      label: 'When was the date of the incident?',
      type: 'date',
    },
    {
      label: 'How much is the bribe that was paid? (optional)',
      type: 'number',
    },
  ];

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  handleSubmission = (evt) => {
    evt.preventDefault();
  }


  render() {

    return (
      <div className="App">
        <FormGenerator form={this.form_data} submit={this.handleSubmission} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
