import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function DisplayLoading() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Loading ...</h3>
        </Col>
      </Row>
    </Container>
  )
}
