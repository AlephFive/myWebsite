import React from 'react';
import { experiences, otherExperiences, skills } from '../data/resumeData';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';

class ResumeTab extends React.Component {
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
              return ExperienceEntry(entry);
            })}
            <br />
            <h3>
              <u>Other Experience</u>
            </h3>
            <br />
            {otherExperiences.map((entry) => {
              return ExperienceEntry(entry);
            })}
            <br />
            <h3>
              <u>Skills</u>
            </h3>
            <br />
            {SkillsEntry(skills)}
            <br />
            <br />
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

function SkillsEntry(skills) {
  return (
    <Row>
      <Col sm={10}>
        <strong>Programming Languages</strong>
        <div>
          <div>
            <u>
              <i>Proficient:</i>
            </u>{' '}
            {skills.progLangs.proficient}
          </div>
          <div></div>
          <u>
            <i>Familiar:</i>
          </u>{' '}
          {skills.progLangs.familiar}
        </div>
        <br />
        <strong>Technologies</strong>
        <div>
          <div>
            <u>
              <i>Proficient:</i>
            </u>{' '}
            {skills.technologies.proficient}
          </div>
          <div>
            <u>
              <i>Familiar:</i>
            </u>{' '}
            {skills.technologies.familiar}
          </div>
        </div>
        <br />
        <strong>Other</strong>
        <div>
          <div>
            <u>
              <i>Proficient:</i>
            </u>{' '}
            {skills.arts.proficient}
          </div>
          <div>
            <u>
              <i>Familiar:</i>
            </u>{' '}
            {skills.arts.familiar}
          </div>
        </div>
        <br />
      </Col>
    </Row>
  );
}

function ExperienceEntry(props) {
  return (
    <Row>
      <Col sm={10}>
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

export default ResumeTab;
