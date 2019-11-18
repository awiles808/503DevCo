import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './About';
import { Projects } from './Projects';
import { Team } from './Team';
import { Contact } from './Contact';
import { Testimonials } from './Testimonials';
import { NotFound404 } from './NotFound404';
import { NavigationBar } from './components/NavigationBar';
import { NewBuilds } from './components/NewBuilds';
import { AduBuilds } from './components/AduBuilds';
import { Flips } from './components/Flips';
// import { Jumbotron } from './components/Jumbotron';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab)

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          {/* <Jumbotron /> */}
          
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/team" component={Team} />
              <Route path="/contact" component={Contact} />
              <Route path="/testimonials" component={Testimonials} />
              <Route path="/newbuilds" component={NewBuilds} />
              <Route path="/adubuilds" component={AduBuilds} />
              <Route path="/flips" component={Flips} />
              <Route component={NotFound404} />
            </Switch>
        
        </Router>
      </React.Fragment>
    );
  }
}

export default App;