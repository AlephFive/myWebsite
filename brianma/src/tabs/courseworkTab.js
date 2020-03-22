import React from 'react';
import { coursework } from '../data/courseworkData';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';

class CourseworkTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [],
    };
  }

  render() {
    return (
      <Container>
        <Row>
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
              return CourseworkEntry(entry);
            })}
          </Container>
        </Row>
      </Container>
    );
  }
}

function CourseworkEntry(props) {
  return (
    <Row>
      <Col sm={10}>
        <div>
          <h5>{props.title}</h5>
        </div>

        <br />
      </Col>
    </Row>
  );
}

export default CourseworkTab;
