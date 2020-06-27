import React from 'react';
import ReactGA from 'react-ga';
import logo from './logo.svg';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import BlogMainPage from './pages/BlogMainPage';
import BlogEntryPage from './pages/BlogEntryPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import { Navbar, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const trackingId = 'UA-161609832-1';

class App extends React.Component {
  componentDidMount() {
    ReactGA.initialize(trackingId);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div style={{ height: '60px' }} />
        <Container style={{ minHeight: '88vh' }}>
          <Router>
            <Switch>
              <Redirect from="/" exact to="/home" />
              <Route path="/home" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/work" component={WorkPage} />
              <Route path="/blog" component={BlogMainPage} />
              <Route path="/blog_entry" component={BlogEntryPage} />
              <Route path="/contact" component={ContactPage} />
            </Switch>
          </Router>
        </Container>
        <footer>
          <div style={{ position: 'sticky', bottom: '0', left: '0', textAlign: 'center' }}>
            <div>© 2020 Brian Ma</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
