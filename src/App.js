import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import allActions from './actions';

import SearchAppBar from './components/SearchAppBar';
import Dashboard from './components/Dashboard';

import Zebra from './components/pages/Zebra';
import Tiger from './components/pages/Tiger';

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.tilesActions.resetTilesFilter());
  }, []);

  return (
    <Router>
      <SearchAppBar/>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/Zebra" component={Zebra} />
        <Route exact path="/Tiger" component={Tiger} />
      </Switch>
    </Router>
  )
}

