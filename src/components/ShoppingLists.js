import React, { Component } from 'react';
import Layout from './Layout';
import axios from 'axios';
import DisplayLists from './DisplayLists';

const SERVER_URL = 'http://localhost:8080/shopping-lists';
const SHAREDLISTS = 'http://localhost:8080/shared-lists';
const USERS = 'http://localhost:8080/users';
const USER_ID = '5d00f33ef2e658783f4e6497';

export default class ShoppingLists extends Component {
  constructor() {
    super();
    this.state = {
      lists: []
    }
    this.getLists = this.getLists.bind(this);
    this.sharedWithIds = this.sharedWithIds.bind(this);
    this.sharedWithNames = this.sharedWithNames.bind(this);
    const lists = this.getLists();
    const sharedIds = lists.then((res) => {
      return this.sharedWithIds(res);
    });
    sharedIds.then((res) => {
      this.sharedWithNames(res);
    });
  }

  async getLists() {
    const res = await axios.get( SERVER_URL + '/owner' + '/' + USER_ID).then((result) => {
      return result.data;
    });
    return res;
  }

  async sharedWithIds(lists) {
    const res = await axios.get( SHAREDLISTS ).then((result) => {
      let listWithShared = [];
      lists.map((shared) => {
        listWithShared.push({
          list: shared,
          shared: result.data.filter(function(res){ return res.list_id === shared._id })
        });
      });
      return listWithShared;
    });
    return res;
  }

  async sharedWithNames(ids) {
    await axios.get( USERS ).then((result) => {
      let listWithNames = [];
      ids.map((shared) => {
        const sharedNames = result.data.filter(res => res._id === shared.shared._id )
        .map((item) => {
          const {fname, lname} = item;
          return `${fname} ${lname}`;
        });
        listWithNames.push({
          list: shared.list,
          shared: sharedNames
        });
      });
      this.setState({
        lists: listWithNames
      });
    });
    return;
  }

  render() {
    return (
      <Layout>
        <DisplayLists lists={this.state.lists} />
      </Layout>
    )
  }
}
