import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import forge from 'node-forge';

const SERVER_URL = 'http://localhost:8080/users';

class SignUp extends Component {
  constructor() {
    super();
    this.signup = this.signup.bind(this);
  }

  signup( user ) {
    var md = forge.md.md5.create();
    md.update(user.password);
    const password = md.digest().toHex();
    axios.post( SERVER_URL, {fname: user.fname, lname: user.lname, email: user.email, password: password} ).then( (result) => {
      this.props.dispatch({type: 'SIGNIN'});
      this.props.props.history.push('/dashboard');
    });
  }

  render() {
    return (
      <SignUpForm onSubmit={ this.signup } />
    )
  }
}

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      confirm_password: '',
      error: ''
    };
    this._onSubmitHandler = this._onSubmitHandler.bind(this);
    this._onFNameChange = this._onFNameChange.bind(this);
    this._onLNameChange = this._onLNameChange.bind(this);
    this._onEmailChange = this._onEmailChange.bind(this);
    this._onPasswordChange = this._onPasswordChange.bind(this);
    this._onCPasswordChange = this._onCPasswordChange.bind(this);
  }

  _onFNameChange(e) {
    this.setState({
      fname: e.target.value
    });
  }

  _onLNameChange(e) {
    this.setState({
      lname: e.target.value
    });
  }

  _onEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  _onPasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  _onCPasswordChange(e) {
    this.setState({
      confirm_password: e.target.value
    });
  }

  _onSubmitHandler(e) {
    e.preventDefault();
    if ( this.state.password !== this.state.confirm_password ) {
      this.setState({
        password: '',
        confirm_password: '',
        error: 'Passwords do not match!'
      });
    } else {
      this.props.onSubmit( this.state );
    }
  }

  render() {
    return (
      <div className="shadow p-3 mb-5 bg-white rounded-lg">
        <h1>Sign Up</h1>
        <p className="error">{this.state.error}</p>
        <Form onSubmit={ this._onSubmitHandler }>
          <Form.Group controlId="formGroupFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" onChange={ this._onFNameChange } value={ this.state.fname } required />
          </Form.Group>
          <Form.Group controlId="formGroupLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" onChange={ this._onLNameChange } value={ this.state.lname } required />
          </Form.Group>
          <Form.Group controlId="formGroupEmail1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={ this._onEmailChange } value={ this.state.email } required  />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formGroupPassword1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" onChange={ this._onPasswordChange } value={ this.state.password } required />
          </Form.Group>
          <Form.Group controlId="formGroupConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" onChange={ this._onCPasswordChange } value={ this.state.confirm_password } required />
          </Form.Group>
          <Button variant="primary" type="submit">
          Sign Up
          </Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(SignUp);
