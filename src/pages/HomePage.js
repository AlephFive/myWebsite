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
              I'm <strong>Brian</strong>! I am currently a junior at{' '}
              <strong>Columbia University</strong> majoring in <strong>Computer Science </strong>.
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
          <br />
        </Row>
        <Row>
          <Col sm={{ span: 8, offset: 2 }} style={{ textAlign: 'left' }}>
            <Card>
              <Card.Body>
                <p>
                  You can download my shortened resume in{' '}
                  <a href="/files/BrianShaoenMa_Resume.pdf" target="_blank" download>
                    PDF
                  </a>{' '}
                  or{' '}
                  <a href="/files/BrianShaoenMa_Resume.docx" target="_blank" download>
                    Word document
                  </a>{' '}
                  formats, and you can send me an email at bm3027@columbia.edu. {'      '} You can
                  also check out my <a href="#/contact">contact page</a> for more ways to reach out
                  to me.
                </p>
                <h5>What are my interests?</h5>
                <p>
                  My primary interests are Human-Computer Interaction, Graphics, UX Design, Software
                  Engineering, Electrical Engineering, Physics, Machine Learning, and Language
                  Learning.
                </p>
                <h5>What am I up to now?</h5>
                <p>I am currently looking for a summer internship!</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
