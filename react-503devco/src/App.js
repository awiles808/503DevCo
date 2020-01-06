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
import { Restorations} from './components/Restorations';
import { House1 } from './components/House1';
import { House2 } from './components/House2';
import { House3 } from './components/House3';
import { ProgressBar } from './components/ProgressBar';
// import { Jumbotron } from './components/Jumbotron';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import SimpleReactLightbox from 'simple-react-lightbox';



library.add(fab)

class App extends Component {
  render() {
    return (
      
      <React.Fragment>
        <Router>
          
          <NavigationBar />
          {/* <Jumbotron /> */}
          
          <SimpleReactLightbox>
            <Switch>
            
              <Route exact path="/" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/team" component={Team} />
              <Route path="/contact" component={Contact} />
              <Route path="/testimonials" component={Testimonials} />
              <Route path="/newbuilds" component={NewBuilds} />
              <Route path="/adubuilds" component={AduBuilds} />
              <Route path="/restorations" component={Restorations} />
              <Route path='/house1' component={House1}/>
              <Route path='/house2' component={House2}/>
              <Route path='/house3' component={House3}/>
              <Route path='/progressbar' component={ProgressBar}/>
              <Route component={NotFound404} />
              
            </Switch>
        </SimpleReactLightbox>
        </Router>
      </React.Fragment>
      
    );
  } 
}

export default App;