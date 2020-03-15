import React, {Component} from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Route, Link} from 'react-router-dom';

import './styles.css'


class SignIn extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.type]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }
  /*
  validateForm = () => {
   return thisemail.length > 0 && password.length > 0;
 }
*/
  render(){
    return (
    <div className="container">
      <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" size="large">
              <FormLabel className="meriClass">Email</FormLabel>
              <FormControl
                autoFocus
                type="email"
                placeholder="Enter email"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" size="large">
              <FormLabel className="meriClass">Password</FormLabel>
              <FormControl
                placeholder="Enter password"
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button variant="dark" className="meriClass" type="submit">
              Login
            </Button>
          </form>

        <Route>
          <Link to="/signUp" className="meraText"> Create Account </Link>
        </Route>

    </div>
    );
  }
}
export default SignIn;
