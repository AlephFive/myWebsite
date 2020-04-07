import React from 'react';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';

class ResumeTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [],
    };
  }

  render(){
    return(
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
            



            
          </Container>
        </Row>
      </Container>
      
    )
  }
}

export default ResumeTab;
