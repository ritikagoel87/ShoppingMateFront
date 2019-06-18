import React, { Component } from 'react';
import MainNavbar from './Navbar';
import axios from 'axios';

const SERVER_URL = 'http://localhost:8080/shopping-lists';
const SHAREDLISTS = 'http://localhost:8080/shared-lists';
const USERS = 'http://localhost:8080/users';
const USER_ID = '5d00f33ef2e658783f4e6497';

export default class SharedLists extends Component {
  constructor () {
    super();
    this.state = {
      lists: []
    };
    this.getsharedLists = this.getsharedLists.bind(this);
  }

  getsharedLists() {
    const sharedLists = axios.get()
  }

  componentDidMount() {
    this.getsharedLists();
  }

  render() {
    return (
      <div>
        <MainNavbar />
        <h1>Lists Shared With You</h1>
        <DisplayList lists={this.state.lists} />
      </div>
    )
  }
}

function DisplayList(props) {

}
