import React from 'react';
import ReactGA from 'react-ga';
import { Container, Tab, Row, Col, Nav, Card } from 'react-bootstrap';
import Markdown from 'markdown-to-jsx';
import { Redirect } from 'react-router';

class BlogEntryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { md: ' ' };
  }

  async componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const articleId = query.get('id');
    try {
      const file = await import(`../data/blog/${articleId}.md`);
      const response = await fetch(file.default);
      const text = await response.text();
      ReactGA.pageview('bp-${articleId}');

      this.setState({
        md: text,
      });
    } catch (err) {
      this.setState({
        md: false,
      });
    }
  }

  render() {
    return !this.state.md ? (
      <Redirect to="blog" />
    ) : (
      <div>
        <Container style={{ height: '100%' }}>
          <br />
          <p>main</p>
          <div className="article">
            <Markdown children={this.state.md} />
          </div>
        </Container>
      </div>
    );
  }
}

export default BlogEntryPage;
