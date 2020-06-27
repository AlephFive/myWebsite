import React from 'react';
import ReactGA from 'react-ga';
import { Container, Tab, Row, Col, Nav, Card } from 'react-bootstrap';
import Resume from '../tabs/resumeTab';
import PublicationTab from '../tabs/publicationTab';
import CourseworkTab from '../tabs/courseworkTab';
import MusicTab from '../tabs/musicTab';

class WorkPage extends React.Component {
  componentDidMount() {
    ReactGA.pageview('work');
  }
  render() {
    return (
      <div>
        <Container style={{ height: '100%' }}>
          <br />
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="first"
            style={{ position: 'sticky' }}
          >
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
                    <Nav.Link eventKey="sixth">Honors/Awards</Nav.Link>
                  </Nav.Item>
                </Nav>
                <br />
                <Card style={{ display: 'none' }}>
                  <Card.Body>Under Construction</Card.Body>
                </Card>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <p>Under Construction</p>
                    <Resume />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <CourseworkTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <PublicationTab />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <p>Under Construction</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth">
                    <p>Under Construction</p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}

export default WorkPage;
