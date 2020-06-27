import React from 'react';
import ReactGA from 'react-ga';
import { Container, Tab, Row, Col, Nav, Card } from 'react-bootstrap';
import ReactMarkdown from "react-markdown";

class BlogMainPage extends React.Component {
  componentDidMount() {
    ReactGA.pageview('blog');
    const query = new URLSearchParams(this.props.location.search); 
    console.log(query.get('hello'));
  }
  render() {
    const query = new URLSearchParams(this.props.location.search); 
    return (
      <div>
        <Container style={{ height: '100%' }}>
          <br />
          {query.get('hello')}
        </Container>
      </div>
    );
  }
}

export default BlogMainPage;