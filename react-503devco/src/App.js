import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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
import { SeFrancis } from './components/SeFrancis';
import { Sw14St11425 } from './components/Sw14St11425';
import { Oberlin } from './components/Oberlin';
import { Alfred } from './components/Alfred';
import { Pomona } from './components/Pomona';
import { Sw61Av10935} from './components/Sw61Av10935';
import { Sw61Av10923 } from './components/Sw61Av10923';
import { Ne68th } from './components/Ne68th';
// import { ProgressBar } from './components/ProgressBar';
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
              <Route path='/sefrancis' component={SeFrancis}/>
              <Route path='/sw14St11425' component={Sw14St11425}/>
              <Route path ='/oberlin' component={Oberlin}/>
              <Route path = '/alfred' component={Alfred}/>
              <Route path = '/pomona' component={Pomona}/>
              <Route path= '/sw61av10935' component={Sw61Av10935}/>
              <Route path ='/sw61av10923' component={Sw61Av10923}/>
              <Route path= '/ne68th' component={Ne68th}/>
              {/* <Route path='/progressbar' component={ProgressBar}/> */}
              <Route component={NotFound404} />
              
            </Switch>
        </SimpleReactLightbox>
        </Router>
      </React.Fragment>
      
    );
  } 
}

export default App;