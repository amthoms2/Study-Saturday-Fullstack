import React, { Component } from 'react';

export default class NewStudentForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        alert('A new user was submitted: ' + this.state.firstName);
        event.preventDefault();
        
        this.setState({
            firstName: '',
            lastName: '',
            email: "",
             // , e.target.fruit.value
          })
    }

  render() {
    return (
      <form>
        <label onSubmit={this.handleSubmit}>
          First Name:
          <input required type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
        </label>

        <label>
          Last Name:
          <input required type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
        </label>

        <label>
          Email:
          <input required type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>

        <button type="submit">Submit New Student</button>
      </form>
    );
  }
}
