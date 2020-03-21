import React from 'react';
import logo from './logo.svg';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import { Navbar, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{height: '60px'}}/>
      <Router>
        <Switch>
          <Redirect from="/" exact to="/home" />
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/work" component={WorkPage} />
        </Switch>
      </Router>
      <Navbar fixed="bottom" className="justify-content-center">
        <Navbar.Text>© 2020 Brian Ma</Navbar.Text>
      </Navbar>
    </div>
  );
}

export default App;
