import React, { useState } from 'react';
import { coursework } from '../data/courseworkData';
import { education } from '../data/educationData';
import { Container, Form, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import { FaFantasyFlightGames } from 'react-icons/fa';
import { reference_HasItemsFrom_this } from '../commonFunctions';

class EducationTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      setOpen: true,
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
                        label="Math"
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
              <u>Education</u>
            </h3>
            <br />
            {education.map((entry) => {
              return EducationEntry(entry);
            })}
            
            <br />
            
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

function EducationEntry(props) {
  return (
    <Row>
      <Col sm={11}>
        <div>
          <h5 style={{ display: 'inline' }}>{props.institution}</h5>
        </div>
        <div>
          {props.location} | {props.dateDescription} | {props.degree}
        </div>
        <div style={{ fontSize: '0.78em' }}>
          {props.info.map((line) => {
            return <div>{line}</div>;
          })}
        </div>
        <br />
      </Col>
    </Row>
  );
}



export default EducationTab;
