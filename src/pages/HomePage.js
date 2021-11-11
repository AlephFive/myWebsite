import React from 'react';
import ReactGA from 'react-ga';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

class HomePage extends React.Component {
  componentDidMount() {
    ReactGA.pageview('home');
  }
  handleExternalLink(text) {
    ReactGA.event({
      category: 'External',
      action: text,
    });
  }
  render() {
    return (
      <Container>
        <br />
        <br />
        <Row>
          <Col sm={{ span: 2, offset: 2 }}>
            <Image src="me_drawn.png" roundedCircle fluid />
          </Col>
          <Col sm={6} style={{ textAlign: 'left' }}>
            <h2 style={{ display: 'inline' }}>Hello There!</h2>
            <h2 style={{ color: '#FFFFFF', display: 'inline' }}> General Kenobi!</h2>

            <p>
              I'm <strong>Brian</strong>! I am currently a senior at{' '}
              <strong>Columbia University</strong> majoring in <strong>Computer Science</strong>.
            </p>
            <p>
              I attended <strong>Colgate University </strong>from 2017 to 2020. I majored in{' '}
              <strong>Physics</strong> and minored in <strong>Mathematics</strong> and
              <strong> Jewish Studies</strong>.
            </p>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col sm={{ span: 8, offset: 4 }} style={{ textAlign: 'left' }}>
            <Button
              variant="secondary"
              href="https://www.linkedin.com/in/mashaoen/"
              target="_blank"
              onClick={() => this.handleExternalLink('Visited LinkedIn')}
            >
              <span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FaLinkedin />
                  <span style={{ margin: '0 3px' }}>LinkedIn</span>
                </div>
              </span>
            </Button>{' '}
            <Button
              variant="secondary"
              href="https://github.com/AlephFive"
              target="_blank"
              onClick={() => this.handleExternalLink('Visited Github')}
            >
              <span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <GoMarkGithub />
                  <span style={{ margin: '0 3px' }}>GitHub</span>
                </div>
              </span>
            </Button>{' '}
            <Button
              variant="secondary"
              href="https://www.instagram.com/nothatbrian/"
              target="_blank"
              onClick={() => this.handleExternalLink('Visited Instagram')}
            >
              <span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FaInstagram />
                  <span style={{ margin: '0 3px' }}>Instagram</span>
                </div>
              </span>
            </Button>{' '}
            <Button
              variant="secondary"
              href="https://www.twitter.com/alephfive"
              target="_blank"
              onClick={() => this.handleExternalLink('Visited Twitter')}
            >
              <span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FaTwitter />
                  <span style={{ margin: '0 3px' }}>Twitter</span>
                </div>
              </span>
            </Button>{' '}
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 8, offset: 4 }} style={{ textAlign: 'left' }}>
            <br/>
            <div>
              You can download my resume in{' '}
              <a href="/files/BrianShaoenMa_Resume_PM.pdf" target="_blank" download>
                PDF
              </a>{' '}
              or{' '}
              <a href="/files/BrianShaoenMa_Resume_PM.docx" target="_blank" download>
                Word document
              </a>{' '}
              formats.
            </div>
          </Col>
        </Row>
        <Row>
          <br />
        </Row>
        <Row>
          <Col sm={{ span: 8, offset: 2 }} style={{ textAlign: 'left' }}>
            <Card>
              <Card.Body>
                <h5>Who am I?</h5>
                <p>
                  I'm a UI/UX Designer who loves to solve user problems with creative solutions inspired by my diverse interests as well as my cultural and academic backgrounds.
                </p>
                <h5>What are my skills?</h5>
                <p>
                  In terms of programming languages, I am experienced in JavaScript, MATLAB, Python, C++, C#, C, and Java. I also have significant experience in Unity, React, and Angular.
                  In terms of design tools, I am proficient in Figma, Basalmiq, Adobe XD, Illustrator, Photoshop, and Premiere Pro.
                </p>
                <h5>What are my interests?</h5>
                <p>
                  My primary interests are Human-Computer Interaction, Graphic Design, UI/UX Design, Software
                  Engineering, Electrical Engineering, Physics, Machine Learning, and Language
                  Learning.
                </p>
                <h5>What am I up to now?</h5>
                <p>I am currently a TA for Columbia's UI design class!</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
