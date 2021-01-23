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
          
            <br />
          </Col>
        </Row>
        
      </Container>
    );
  }
}

//

export default TempProjPage;
