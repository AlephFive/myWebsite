import React, { useState } from 'react';
import { coursework } from '../data/courseworkData';
import { education } from '../data/educationData';
import { Container, Form, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import { FaFantasyFlightGames } from 'react-icons/fa';
import { reference_HasItemsFrom_this } from '../commonFunctions';

class CourseworkTab extends React.Component {
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
            <div>
              You can download a shortened resume in{' '}
              <a href="/files/BrianShaoenMa_Resume.pdf" target="_blank" download>
                PDF
              </a>{' '}
              or{' '}
              <a href="/files/BrianShaoenMa_Resume.docx" target="_blank" download>
                Word document
              </a>{' '}
              formats.
            </div>
            <br />
            <h3>
              <u>Education</u>
            </h3>
            <br />
            {education.map((entry) => {
              return EducationEntry(entry);
            })}
            <br />
            <h3>
              <u>Relevant Coursework</u>
            </h3>
            <br />
            {coursework.map((entry) => {
              if (
                this.props.filters.length < 1 ||
                reference_HasItemsFrom_this(this.props.filters, entry.relevance)
              ) {
                return <CourseworkEntry data={entry} />;
              }
            })}
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
      <Col sm={10}>
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

class CourseworkEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  setOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={10}>
            <Collapse in={this.state.open}>
              <div>
                <br />
              </div>
            </Collapse>
          </Col>
        </Row>
        <Row>
          <Col sm={7}>
            <a href="javascript:void(0);" onClick={() => this.setOpen()}>
              <strong>
                {this.props.data.code}: {this.props.data.title}
              </strong>
            </a>
          </Col>
          <Col sm={2} style={{ textAlign: 'right' }}>
            {this.props.data.semester} {this.props.data.year}
          </Col>
          <Col sm={3}>{this.props.data.institution}</Col>
        </Row>
        <Row>
          <Col sm={10}>
            <div>
              <Collapse in={this.state.open}>
                <div id="example-collapse-text">
                  <strong>Description: </strong>
                  <span>{this.props.data.description}</span>
                  <br />
                  <br />
                </div>
              </Collapse>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CourseworkTab;
