import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Router, Route, Link as ReactLink, Switch} from 'react-router-dom';

import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import history from '../history';
import Login from '../ui/Login';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

export const onAuthChange = (isAuthenticated) =>{
    const pathName = history.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
    const isAuthenticatedPage = authenticatedPages.includes(pathName);
  
    if (isUnauthenticatedPage && isAuthenticated) {
      history.replace('/links');
    } else if (authenticatedPages && !isAuthenticated) {
      history.replace('/');
    }
}

//TODO: Bug, Can't 404 without loging in.
export const routes = (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/links' component={Link}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
);