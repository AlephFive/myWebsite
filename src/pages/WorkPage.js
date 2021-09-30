import React from 'react';
import ReactGA from 'react-ga';
import { Container, Tab, Row, Col, Nav, Card, Form } from 'react-bootstrap';
import ResumeTabWork from '../tabs/resumeTabWork';
import ResumeTabOther from '../tabs/resumeTabOther';
import ResumeTabSkills from '../tabs/resumeTabSkills';
import PublicationTab from '../tabs/publicationTab';
import CourseworkTab from '../tabs/courseworkTab';
import MusicTab from '../tabs/musicTab';
import { FILTERS, FILTERNAMES } from '../data/TagReference';
import CertificationTab from '../tabs/certificationTab';
import EducationTab from '../tabs/educationTab';

class WorkPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterList: [],
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    const filterList = this.state.filterList.slice();

    if (event.target.checked) {
      filterList.push(event.target.value);
    } else {
      filterList.splice(filterList.indexOf(event.target.value), 1);
    }

    this.setState({
      filterList: filterList,
    });
  }

  componentDidMount() {
    ReactGA.pageview('work');
  }

  displayForm() {
    return (
      <Form>
        {FILTERS.map((entry) => {
          return (
            <Form.Check
              type="checkbox"
              id={entry}
              label={FILTERNAMES[entry]}
              value={entry}
              checked={this.state.filterList.includes(entry)}
              onChange={this.handleFilterChange}
            />
          );
        })}
      </Form>
    );
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
                    <Nav.Link eventKey="first">Education</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="coursework">Coursework</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="work">Work Experience</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="other">Other Experience</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="skills">Skills</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Publications</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Certifications</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth" style={{ display: 'none' }}>
                      Licenses/Certifications
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sixth" style={{ display: 'none' }}>
                      Honors/Awards
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <br />
                <Card>
                  <Card.Header>I only want to see things related to...</Card.Header>
                  <Card.Body>{this.displayForm()}</Card.Body>
                </Card>
              </Col>
              <Col sm={9}>
                <div style={{overflow: 'hidden'}}>
                <Tab.Content style={{ height: '80vh', 'overflow-y': 'scroll', 'padding-right': '17px', 'box-sizing': 'content-box'}}>
                  <Tab.Pane eventKey="first">
                    <EducationTab filters={this.state.filterList} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="coursework">
                    <CourseworkTab filters={this.state.filterList} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="work">
                    <ResumeTabWork filters={this.state.filterList} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="other">
                    <ResumeTabOther filters={this.state.filterList} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="skills">
                    <ResumeTabSkills filters={this.state.filterList} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <PublicationTab filters={this.state.filterList} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <CertificationTab filters={this.state.filterList} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <p>Under Construction</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth">
                    <p>Under Construction</p>
                  </Tab.Pane>
                </Tab.Content>
                </div>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}

export default WorkPage;
