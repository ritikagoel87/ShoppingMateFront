import React, { Component } from 'react';
import MainNavbar from './Navbar';
import Footer from './Footer';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <MainNavbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
