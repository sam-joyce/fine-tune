import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Nav from '../components/Nav';
import Home from '../containers/Home';
import About from '../containers/About';
import Contact from '../containers/Contact';

const Routes = () => {
  return (
    <BrowserRouter>
          <Nav />
          <Switch>
            <Route component={Home} path='/' exact />
            <Route component={About} path='/about' />
            <Route component={Contact} path='/contact' />
          </Switch>
        </BrowserRouter>
  )
}

export default Routes;
