import React from 'react';



class NewStudentForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          firstName: '',
          lastName: '',
          email: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value // to be dynamic
          })
    }
  
    handleSubmit(event) {
      event.preventDefault();
      console.log(event.target)
    //   this.setState({
        
    //   })
    }
  
    render() {
      return (
        <div>
        <form id="newForm" onSubmit={this.handleSubmit}>
          <label for='firstName'>
            <input 
            name="firstName"
            type="text" 
            value={this.state.firstName} 
            onChange={this.handleChange} />
            <input
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleChange}
            />
            <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.state.onChange}
            />
          </label>
          <button>Add New Student</button>
        </form>
        </div>
      );
    }
  }

  export default NewStudentForm