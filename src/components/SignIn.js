import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import forge from 'node-forge';

const LOGIN_URL = 'http://localhost:8080/user/login';

class SignIn extends Component {
  constructor() {
    super();
    this.signin = this.signin.bind(this);
  }

  signin( user ) {
    var md = forge.md.md5.create();
    md.update(user.password);
    const password = md.digest().toHex();
    axios.get( LOGIN_URL + '/' + user.email + '/' + password ).then( (result) => {
      this.props.dispatch({type: 'SIGNIN'});
      this.props.props.history.push('/dashboard');
    });
  }

  render() {
    return (
      <SignInForm onSubmit={ this.signin } />
    )
  }
}

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    };
    this._onSubmitHandler = this._onSubmitHandler.bind(this);
    this._onEmailChange = this._onEmailChange.bind(this);
    this._onPasswordChange = this._onPasswordChange.bind(this);
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

  _onSubmitHandler(e) {
    e.preventDefault();
    this.props.onSubmit( this.state );
  }

  render() {
    return (
      <div className="shadow p-3 mb-5 bg-white rounded-lg">
        <h1>Sign In</h1>
        <Form onSubmit={ this._onSubmitHandler }>
          <Form.Group controlId="formGroupEmail2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={ this._onEmailChange } value={ this.state.email } required  />
          </Form.Group>
          <Form.Group controlId="formGroupPassword2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" onChange={ this._onPasswordChange } value={ this.state.password } required />
          </Form.Group>
          <Button variant="primary" type="submit">
          Sign In
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

export default connect(mapStateToProps)(SignIn);
