import React from 'react';
import ReactGA from 'react-ga';
import { Container, Tab, Row, Col, Nav, Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { contents } from '../data/blog/blogContents';

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
          <Row>
            <Container>
              {contents.map((entry) => {
                return <BlogEntry data={entry} />;
              })}
            </Container>
          </Row>
        </Container>
      </div>
    );
  }
}

class BlogEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <a href="#blog-entry?id=hello-world">
              <strong>
                {this.props.data.title}: {this.props.data.blurb}
              </strong>
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BlogMainPage;
