import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function AboutPage() {
  return (
    <Container>
      <br />
      <br />
      <Row>
        <Col sm={{ span: 2, offset: 2 }}>
          <Image src="me.jpg" rounded fluid />
        </Col>
        <Col sm={6} style={{ textAlign: 'left' }}>
          <h2>My name is Brian Ma 马绍恩</h2>

          <p>
            I'm <strong>Brian</strong>! I am currently a junior at{' '}
            <strong>Colgate University</strong>. I major in <strong>Physics</strong> and minor in{' '}
            <strong>Mathematics</strong> and
            <strong> Jewish Studies</strong>.
          </p>
          <p>
            I will be attending <strong>Columbia University</strong> starting from the fall of 2020
            studying <strong>Computer Science </strong>
            as part of a 3-2 engineering program.
          </p>
          <p>
            I speak fluent English as well as Mandarin, and I have elementary proficiency in French
            and Hebrew. I've also studied Hungarian and Esperanto, but those went nowhere haha. You
            can follow me on Duolingo{' '}
            <a href="https://www.duolingo.com/u/3267626" target="_blank">
              here
            </a>
            .
          </p>
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
