import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './About';
import { Projects } from './Projects';
import { Team } from './Team';
import { Contact } from './Contact';
import { NotFound404 } from './NotFound404';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/team" component={Team} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound404} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;