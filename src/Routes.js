import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import App from './components/App';
import Dashboard from './components/Dashboard';
import ShoppingLists from './components/ShoppingLists';
import SharedLists from './components/SharedLists';
import Expenses from './components/Expenses';
import SharedExpenses from './components/SharedExpenses';
import NewList from './components/NewList';
import ListPage from './components/ListPage';
import EditList from './components/EditList';

const IMAGE_URL = './assets/images/';

const Routes = (
  <Router>
    <div id="home-container">
      <Route exact path="/" component={ Home } />
      <Route exact path="/dashboard" component={ Dashboard } />
      <Route exact path="/shopping-lists" component={ ShoppingLists } />
      <Route exact path="/shared-lists" component={ SharedLists } />
      <Route exact path="/expenses" component={ Expenses } />
      <Route exact path="/shared-expenses" component={ SharedExpenses } />
      <Route exact path="/new-list" component={ NewList } />
      <Route exact path="/lists/:id/edit" component={ EditList } />
      <Route exact path="/lists/:id" component={ ListPage } />
    </div>
  </Router>
);

export default Routes;
