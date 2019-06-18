import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function DisplayList(props) {
  return (
    <Container>
      <h1>Your Shopping Lists</h1>
      <Row>
        <Col>Name</Col>
        <Col>Shared With</Col>
        <Col>Created On</Col>
        <Col>Status</Col>
      </Row>
      { props.lists.map(function(list, i){
        let status = "";
        if (list.list.completed) {
          status = "Complete";
        } else {
          status = "Pending";
        }

        return (
          <Row key={i}>
            <Col><a href={ "#/lists/" + list.list._id }>{list.list.name}</a></Col>
            <Col>{list.shared.join(', ')}</Col>
            <Col>{list.list.createdAt}</Col>
            <Col>{ status }</Col>
          </Row>
        );
      }) }
    </Container>
  )
}
