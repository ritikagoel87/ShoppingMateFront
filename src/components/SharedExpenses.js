import React, { Component } from 'react';
import MainNavbar from './Navbar';

export default class SharedExpenses extends Component {
  render() {
    return (
      <div>
        <MainNavbar />
        <h1>Your Shared Expenses</h1>
      </div>
    )
  }
}
