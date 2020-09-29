import React from 'react';
import { certifications } from '../data/certificationData';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';
import { reference_HasItemsFrom_this } from '../commonFunctions';

class CertificationTab extends React.Component {
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
          <br />
        </Row>
        <Row>
          <Container>
            <h3>
              <u>Certifications/Online Courses</u>
            </h3>
            <br />
            {certifications.map((entry) => {
              if (
                this.props.filters.length < 1 ||
                reference_HasItemsFrom_this(this.props.filters, entry.relevance)
              ) {
                return CertificationEntry(entry);
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

function CertificationEntry(props) {
  return (
    <Row>
      <Col sm={10}>
        <div>
          <h5 style={{ display: 'inline' }}>{props.title}</h5>
        </div>
        <div>
          <span>
            <i>{props.note} </i>
          </span>
        </div>
        <div>
          {props.institution} | {props.month}, {props.year}
        </div>
        <div style={{ fontSize: '0.78em' }}>{props.description}</div>
        <br />
      </Col>
    </Row>
  );
}

export default CertificationTab;
