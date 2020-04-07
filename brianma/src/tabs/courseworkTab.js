import React, { useState } from 'react';
import { coursework } from '../data/courseworkData';
import { Container, Form, Row, Col, Card, Button, Collapse } from 'react-bootstrap';
import { FaFantasyFlightGames } from 'react-icons/fa';

class CourseworkTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [],
      open: true,
      setOpen: true,
    };
  }

  render() {
    return (
      <Container>
        <Row style={{display:'none'}}>
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
            {coursework.map((entry) => {
              return <CourseworkEntry data={entry} />;
            })}
          </Container>
        </Row>
      </Container>
    );
  }
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
                  {this.props.data.description}

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
