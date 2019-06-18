import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LogoBar() {
  return (
    <div className="p-2 bg-dark text-white">
      <Container>
        <Row>
          <Col className="text-center">
            <FontAwesomeIcon icon={faClipboardList} size="1x" />
            <span className="pl-2">SHOPPING MATE</span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
