import React from 'react';
import { experiences, otherExperiences, skills } from '../data/resumeData';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';
import { reference_HasItemsFrom_this } from '../commonFunctions';

class ResumeTabWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [],
    };
  }

  render() {
    return (
      <Container>
        <Row style={{ display: 'none' }}>
          <Col sm={10}>
            <Card>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Filter by Topic</Card.Subtitle>
                <Card.Text>
                  <Form>
                    <div key={`custom-inline-checkbox`} className="mb-3">
                      <Form.Check
                        custom
                        inline
                        label="Physics"
                        type="checkbox"
                        id={`custom-inline-checkbox-1`}
                      />
                      <Form.Check
                        custom
                        inline
                        label="Human-Computer Interaction"
                        type="checkbox"
                        id={`custom-inline-checkbox-2`}
                      />
                    </div>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <br />
        </Row>
        <Row>
          <Container>
            <h3>
              <u>Work Experience</u>
            </h3>
            <br />
            {experiences.map((entry) => {
              if (
                this.props.filters.length < 1 ||
                reference_HasItemsFrom_this(this.props.filters, entry.relevance)
              ) {
                return ExperienceEntry(entry);
              }
            })}
            
            <br />
            <br />
            <br />
            <br />

          </Container>
        </Row>
      </Container>
    );
  }
}



function ExperienceEntry(props) {
  return (
    <Row>
      <Col sm={11}>
        <div>
          <h5 style={{ display: 'inline' }}>{props.label}</h5>
        </div>
        <div>
          <span>
            <strong>{props.jobTitle} </strong>
          </span>
        </div>
        <div>
          {props.location} | {props.dateDescription}
        </div>
        <div>
          {props.description.map((line) => {
            return <div style={{ fontSize: '0.78em' }}>• {line}</div>;
          })}
        </div>
        <br />
      </Col>
    </Row>
  );
}

function convertToDateString(info) {
  return (
    <span>
      {info.day}/{info.month}/{info.year}
    </span>
  );
}

export default ResumeTabWork;
