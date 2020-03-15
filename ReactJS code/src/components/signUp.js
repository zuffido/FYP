import React, {Component} from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {NavLink, BrowserRouter, Route, Link} from 'react-router-dom';

import './styles.css'

class SignUp extends Component {
  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    //We can send to DB here
  }

  render(){
    const {firstName,lastName,email} = this.state;

    const newTo = {
      pathname: "/creditCard",
      param1: `${firstName}`,
      param2: `${lastName}`,
      param3: `${email}`
    };

    return (
    <div className="container">
      <form onSubmit={this.handleSubmit}>

      <FormGroup controlId="email" size="large">
      <FormLabel className="meriClass">First Name</FormLabel>
      <FormControl
        autoFocus
        name="firstName"
        type="text"
        onChange={this.handleChange}
      />
      <FormLabel className="meriClass">Last Name</FormLabel>
      <FormControl
        name="lastName"
        type="text"
        onChange={this.handleChange}
      />
      </FormGroup>

            <FormGroup controlId="email" size="large">
              <FormLabel className="meriClass">Email</FormLabel>
              <FormControl
                name="email"
                type="email"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" size="large">
              <FormLabel className="meriClass">Password</FormLabel>
              <FormControl
                name="password"
                type="password"
                onChange={this.handleChange}
              />
            </FormGroup>

            <Link to={newTo} >
              <Button variant="dark" className="meriClass" type="submit">
                Create User
                </Button>
            </Link>
          </form>


    </div>
    );
  }
}
export default SignUp;
