import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import allActions from './actions';

import SearchAppBar from './components/SearchAppBar';
import Dashboard from './components/Dashboard';

import MyFormPage from './components/MyFormPage';

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
        <Route exact path="/Zebra" component={MyFormPage} />
      </Switch>
    </Router>
  )
}

