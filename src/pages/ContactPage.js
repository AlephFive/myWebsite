import React from 'react';
import ReactGA from 'react-ga';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { contactInfo as c } from '../data/contactData';

class ContactPage extends React.Component {
  componentDidMount() {
    ReactGA.pageview('contact');
  }
  render() {
    return (
      <Container>
        <br />
        <br />
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <h3>Contact Information</h3>
          </Col>
        </Row>
        <Row>
          <br />
        </Row>
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <Card>
              <Card.Body>
                {contactItem('Email', c.email)}
                
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

/*
                <Row>
                  <Col sm={{ span: 8, offset: 2 }}>
                    <br />
                    <p>Please send me a postcard! {':)'}</p>
                  </Col>
                </Row>
*/

function contactItem(label, data) {
  return (
    <Row>
      <Col sm={2}>
        <h5>{label}:</h5>
      </Col>
      <Col sm={7}>
        {Array.isArray(data) ? data.map((entry) => <div>{entry.value}</div>) : <p>{data}</p>}
      </Col>
    </Row>
  );
}
//

export default ContactPage;
