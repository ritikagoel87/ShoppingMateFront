import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import MainNavbar from './Navbar';

const SERVER_URL = 'http://localhost:8080/users';
const USER_ID = '5d00f33ef2e658783f4e6497';
const USER_FNAME = 'Ritika';
const USER_LNAME = 'Goel';

class Dashboard extends Component {

  render() {
    // if(this.props.user !== "") {
      return (
        <div>
          <MainNavbar />
          <h1 className="mx-auto">Hello {USER_FNAME} {USER_LNAME}!</h1>
          <a href="#/new-list" className="mt-auto btn btn-primary">Create List</a>
        </div>
      );
    // }
  }
};

// const mapStateToProps = (state) => {
//   return {
//     user: state.user
//   }
// }
//
// export default connect(mapStateToProps)(Dashboard);

export default Dashboard;
