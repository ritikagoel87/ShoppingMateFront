import React, { Component } from 'react';
import MainNavbar from './Navbar';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import classnames from 'classnames';
import DisplayLoading from './DisplayLoading';

const SERVER_URL = 'http://localhost:8080/shopping-lists/';
const SHARED_LISTS = 'http://localhost:8080/shared-lists';
const LIST_ITEMS = 'http://localhost:8080/items/list/';
const USERS = 'http://localhost:8080/users';
const USER_ID = '5d00f33ef2e658783f4e6497';

export default class ListPage extends Component {
  constructor() {
    super();
    this.state = {
      shoppingListDetails: undefined,
      sharedWith: "None",
      listItems: []
    }
    this.getLists = this.getLists.bind(this);
    this.getListItemsById = this.getListItemsById.bind(this);
  }

  async getListItemsById(id) {
    await axios.get( LIST_ITEMS + id ).then((result) => {
      console.log(result);
      this.setState({
        listItems: result.data
      });
    });
  }

  async getLists(id) {

    const shoppingListDetails = await axios.get( SERVER_URL + id ).then((result) => {
      return result.data;
    });

    const sharedWithIds = await axios.get( SHARED_LISTS ).then((result) => {

      return result.data.filter(res => res.list_id === shoppingListDetails._id );
    });

    if(sharedWithIds.length === 0){
      this.setState({
        shoppingListDetails
      });

      return;
    }

    const sharedWith = await axios.get( USERS ).then((result) => {
      return sharedWithIds.map((shared) => {

        const sharedWithList = result.data.filter(res => res._id === shared._id )
        .map((item) => {
          const {fname, lname} = item;
          return {
            fname,
            lname,
            fullName: `${fname} ${lname}`
          };
        });

        return sharedWithList.map(user => user.fullName).join(", ");
      });
    });

    this.setState(() => {
      return {
        shoppingListDetails,
        sharedWith
      };
    });
  };

  componentDidMount() {
    const listId = this.props.match.params.id;
    this.getLists(listId);
    this.getListItemsById(listId);
  }

  render() {
    const {shoppingListDetails, sharedWith, listItems} = this.state;
    return (
      <div>
        <MainNavbar />
        {
          !this.state.shoppingListDetails ?
          <DisplayLoading /> :
          <DisplayList
            shoppingListDetails={shoppingListDetails}
            sharedWith={sharedWith}
            listItems={listItems}
          />
        }
      </div>
    )
  }
}

function DisplayList(props) {
  const {shoppingListDetails, sharedWith} = props;
  let status = "";
  let statusAlert = "";
  if (shoppingListDetails.completed) {
    status = "Complete";
    statusAlert = "success";
  } else {
    status = "Pending";
    statusAlert = "danger";
  }
  return (
    <Container>
      <Row className="my-3">
        <Col className="d-inline-flex">
          <h1>{shoppingListDetails.name} <small>by You</small></h1>
          <Button className="ml-3" variant={ statusAlert }>{ status }</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Shared With: <small>{sharedWith}</small></h3>
        </Col>
        <Col>
          <h3>Created On: <small>{ new Intl.DateTimeFormat('en-AU').format(new Date(shoppingListDetails.createdAt)) }</small></h3>
        </Col>
      </Row>

    </Container>
  )
}
