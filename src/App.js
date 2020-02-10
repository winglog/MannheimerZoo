import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import SearchAppBar from './components/SearchAppBar';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <Provider store={store}>
      <SearchAppBar/>
      <Dashboard />
    </Provider>
  )
}

