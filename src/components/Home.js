import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SignUp from './SignUp';
import SignIn from './SignIn';
import LogoBar from './LogoBar';
import Footer from './Footer';
import '../assets/stylesheets/custom-style.css';


const initialState = {
  user: ''
};

// Set of Rules to take the current state and an action
// and return a new state
const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SIGNUP':
      return {
        user: action.user
      };
    case 'SIGNIN':
      return {
        user: action.user
      };
    default:
      return state; // The reducer must always return a state object.
  }
};

const store = createStore( reducer );

export default class Home extends Component {
  render() {
    return (
      <Provider store={store}>
        <LogoBar />
        <Container>
          <Row>
            <Col sm={12}>
              <h1 className="text-center">Welcome to Shopping Mate!</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <SignUp props={this.props} />
            </Col>
            <Col>
              <SignIn props={this.props} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </Provider>
    );
  }
}
