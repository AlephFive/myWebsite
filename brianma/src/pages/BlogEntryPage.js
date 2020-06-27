import React from 'react';
import ReactGA from 'react-ga';
import { Container, Tab, Row, Col, Nav, Card } from 'react-bootstrap';
import Markdown from "markdown-to-jsx";

class BlogEntryPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { md: '' }
  }

  async componentDidMount() {
    const query = new URLSearchParams(this.props.location.search); 
    const articleId = query.get('id'); 
    ReactGA.pageview('bp-${articleId}');
    const file = await import(`../data/blog/article-${articleId}.md`);
    const response = await fetch(file.default);
    const text = await response.text();

    this.setState({
        md: text
    })
  }
  
  render() {
    return (
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