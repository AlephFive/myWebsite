import React from 'react';
import ReactGA from 'react-ga';
import { Container, Row, Col, Image } from 'react-bootstrap';
import PublicationTab from '../tabs/publicationTab';

class PublicationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    ReactGA.pageview('publication');
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
        <Row>
          <Col sm={{ span: 10, offset: 1 }} style={{ textAlign: 'left' }}>
            <br/>
            <h3>
              <u>Publications</u>
            </h3>
            
            <PublicationTab/>

          </Col>
        </Row>
          
        
      </Container>
      
    );
  }
}

export default PublicationPage;
