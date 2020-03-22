import React from 'react';
import { publications } from '../data/publicationData';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';

class PublicationTab extends React.Component {
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
            {publications.map((entry) => {
              return PublicationEntry(entry);
            })}
            {publications.map((entry) => {
              return PublicationEntry(entry);
            })}
            {publications.map((entry) => {
              return PublicationEntry(entry);
            })}
            {publications.map((entry) => {
              return PublicationEntry(entry);
            })}
            {publications.map((entry) => {
              return PublicationEntry(entry);
            })}
            {publications.map((entry) => {
              return PublicationEntry(entry);
            })}
            {publications.map((entry) => {
              return PublicationEntry(entry);
            })}
            {publications.map((entry) => {
              return PublicationEntry(entry);
            })}
            {publications.map((entry) => {
              return PublicationEntry(entry);
            })}
            {publications.map((entry) => {
              return PublicationEntry(entry);
            })}
            {publications.map((entry) => {
              return PublicationEntry(entry);
            })}
            {publications.map((entry) => {
              return PublicationEntry(entry);
            })}
          </Container>
        </Row>
      </Container>
    );
  }
}

function PublicationEntry(props) {
  return (
    <Row>
      <Col sm={10}>
        <div>
          <h5>{props.title}</h5>
        </div>
        <div>
          <span>
            <u>Author{props.authors.length == 1 ? '' : 's'}</u>:{' '}
          </span>
          {props.authors.map((name) => {
            return name == 'Shao-en Ma' || name == 'Brian Ma' ? (
              <span>
                <strong>{name}</strong>,{' '}
              </span>
            ) : (
              <span>{name}, </span>
            );
          })}
        </div>
        <div>
          <i>{props.book}</i>
          <span> | {props.location}</span>
          <span> | {props.dateDescription}</span>
          <div>
            <a href={props.link}>{props.link}</a>
          </div>
        </div>
        <br />
      </Col>
    </Row>
  );
}

export default PublicationTab;
