import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './About';
import { Projects } from './Projects';
import { Team } from './Team';
import { Contact } from './Contact';
import { NotFound404 } from './NotFound404';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component ={About} />
          <Route  path="/projects" component={Projects} />
          <Route  path="/team" component={Team} />
          <Route  path="/contact" component={Contact} />
          <Route  component={NotFound404} />
        </Switch>
      </Router>



    </React.Fragment>

  );
}

export default App;
