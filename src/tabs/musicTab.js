import React from 'react';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';

function MusicTab() {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <h4>Voice</h4>
          <p>I am currently working with Marcus Haddock (is this too pretentious)</p>
          <h5>Performances:</h5>
          <p>Luncheon 1</p>
          <p>Luncheon 2</p>
        </Col>
      </Row>
    </Container>
  );
}

export default MusicTab;
