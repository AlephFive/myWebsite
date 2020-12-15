import React from 'react';
import ReactGA from 'react-ga';
import { Container, Row, Col, Image } from 'react-bootstrap';

class TempProjPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    ReactGA.pageview('tempproj');
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
            <h1>Temporary Proj</h1>
          </Col>
          <Col sm={6} style={{ textAlign: 'left' }}>
          <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FmJqovaVeAwKNaweQ3GFpzW%2FUI-Design-Final%3Fnode-id%3D34%253A133%26scaling%3Dscale-down" allowfullscreen></iframe>
            <br />
          </Col>
        </Row>
        
      </Container>
    );
  }
}

export default TempProjPage;
