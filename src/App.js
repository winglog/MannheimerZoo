import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import allActions from './actions';

import SearchAppBar from './components/SearchAppBar';
import Dashboard from './components/Dashboard';

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.tilesActions.resetTilesFilter());
  }, []);

  return (
    <div>
      <SearchAppBar/>
      <Dashboard />
    </div>
  )
}

