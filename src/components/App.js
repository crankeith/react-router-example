import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//App Components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Featured from './Featured';
import Courses from './Courses';
import NotFound from './NotFound'

const App = () => (
    <BrowserRouter basename="/react-router-example">
      <div className="container">
        <Header />
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/about" render={ () =>  <About title="About" /> }/>
            <Route exact path="/teachers" component={ Teachers } />
            <Route path="/teachers/:topic/:name" component={ Featured } />

            {/*Example of optional parameter uses "?" at the end of variable*/}
            {/*<Route path="/teachers/:topic/:fname/:lname?" component={ Featured } />*/}
            <Route path="/courses" component={ Courses }/>
            <Route component ={ NotFound } />
          </Switch>
      </div>
    </BrowserRouter>
);

export default App;