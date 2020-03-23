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
              Aspiring software and hardware developer with significant experience with C++, C#, and
              Circuit Design for Human Computer Interaction, Hardware Prototyping and Design, with
              published research in a top ACM conference (TEI). Significant industry experience in
              Web-Front End Development with JavaScript, collaborating with PMs and Back-End
              Developers to deliver robust results within tight deadlines. Familiar with industry
              standards and practices and has contributions to an open source project used by a
              well-known company. Can thrive in both industry and academic research environments.
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
              . I also enjoy singing and have been involved in the Colgate University Chourus. My
              favourite book is <i>King Solomon's Ring</i> by Konrad Lorenz.
            </p>
            <p>
              I speak fluent English as well as Mandarin, and I have elementary proficiency in
              French and Hebrew. I have also studied Hungarian and Esperanto, but those went nowhere
              ha ha. You can stalk me on Duolingo{' '}
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
            <div style={{ fontSize: '13px', color: '#a1a1a1' }}>
              <u>About this website:</u>
              <p>
                Credit for the illustrated portrait goes to Rovoz Zhong. Check out her instagram{' '}
                <a href="https://www.instagram.com/mooncake_95/">@mooncake_95</a>! Credit for the
                photo of me on this page goes to Yang Zhang. This website was built using React and
                the create-react-app boilerplate, and blog was built using ButterCMS. I built this
                website over a weekend during coronavirus social-distancing, mostly because I was
                bored. Source code available{' '}
                <a href="https://github.com/AlephFive/alephfive.github.io/tree/develop">here</a>.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutPage;
