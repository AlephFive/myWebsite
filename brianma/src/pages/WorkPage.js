import React from 'react';
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';
import Resume from '../data/resume'

function WorkPage() {
  return (
    <Container>
        <br/>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Resume</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Coursework</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Publications</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Music</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sixth">Honors/Awards</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Resume />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <p>first</p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <p>sedonc</p>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <p>sedonc</p>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <p>sedonc</p>
              </Tab.Pane>
              <Tab.Pane eventKey="sixth">
                <p>sedonc</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default WorkPage;
