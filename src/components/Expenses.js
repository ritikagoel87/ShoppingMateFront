import React, { Component } from 'react';
import MainNavbar from './Navbar';

export default class Expenses extends Component {
  render() {
    return (
      <div>
        <MainNavbar />
        <h1>Your Expenses</h1>
      </div>
    )
  }
}
