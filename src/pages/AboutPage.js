import React from 'react';
import ReactGA from 'react-ga';
import { Container, Row, Col, Image } from 'react-bootstrap';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    ReactGA.pageview('about');
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
            <Image src="me.jpg" rounded fluid />
          </Col>
          <Col sm={6} style={{ textAlign: 'left' }}>
            <h2>My name is Brian Ma 马绍恩</h2>

            <p>
              I am aspiring software and hardware developer with experience in front-end web
              development and electrical engineering. I am currently studying at Columbia University
              and majoring in Computer Science. I attended Colgate University between 2017 and 2020
              and majored in Physics with minors in Mathematics and Jewish Studies.
            </p>
            <p>
              My interests include (and are not limited to) Human-Computer Interaction, Graphics, UX
              Design, Software Engineering, Electrical Engineering, Physics, Machine Learning,
              Interactive Art, Graphic Design, Music, World History, Politics, and Language
              Learning.
            </p>
            <p>
              I am Taiwanese-American and I was born in Fremont, California. However, I grew up in
              Beijing, China. I play the drum kit and I occasionally upload videos to my{' '}
              <a
                href="https://www.youtube.com/user/RandomePerson18/"
                target="_blank"
                onClick={() => this.handleExternalLink('Visited Youtube channel')}
              >
                Youtube Channel
              </a>
              . I also enjoy singing was a member of the Colgate University Chorus. My favourite
              book is <i>King Solomon's Ring</i> by Konrad Lorenz.
            </p>
            <p>
              I speak native-level English as well as Mandarin, and I have elementary proficiency in
              French and Hebrew. I have also studied Hungarian and Esperanto in the past, but those
              went nowhere ha ha. You can stalk me on Duolingo{' '}
              <a
                href="https://www.duolingo.com/u/3267626"
                target="_blank"
                onClick={() => this.handleExternalLink('Visited Duolingo')}
              >
                here
              </a>
              .
            </p>
            <br />
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <div style={{ fontSize: '12px', color: '#a1a1a1' }}>
              <u>About this website:</u>
              <p>
                Credit for the illustrated portrait on the home page goes to Rovoz Zhong (
                <a href="https://www.instagram.com/mooncake_95/" target="_blank">
                  @mooncake_95
                </a>
                ). Credit for the photo of me on this page goes to Yang Zhang. This website was
                built using React and the create-react-app boilerplate. I built this website over a
                weekend during coronavirus social-distancing, mostly because I was bored. Source
                code available{' '}
                <a
                  href="https://github.com/AlephFive/alephfive.github.io/tree/develop"
                  target="_blank"
                >
                  here
                </a>
                .
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutPage;
