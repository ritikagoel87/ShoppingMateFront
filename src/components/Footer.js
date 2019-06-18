import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className="bg-dark text-white fixed-bottom">
      <Container>
        <Row>
          <Col>
            <p className="text-center m-0 p-2">
              <span id="copyright">&copy;</span>
              <span className="pl-2">Copyright Ritika Goel ❤</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
