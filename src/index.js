/**
 *
 * Lessons learnt:
 *
 * <CssBaseline /> acts as normalize.css
 *
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './store';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import rgb1 from '@material-ui/core/colors/lightGreen';
import rgb2 from '@material-ui/core/colors/grey';

// Setup Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

// Setup MUI Theme
const theme = createMuiTheme({
  palette: {
    primary: {
      light: rgb1[200],
      main: rgb1[700],
      dark: rgb1[900],
      contrastText: '#fff',
    },
    secondary: {
      light: rgb2[200],
      main: rgb2[400],
      dark: rgb2[600],
      contrastText: '#000',
    },
  },
  buttonStyle: {
    background: 'linear-gradient(45deg, #222 10%, #999 90%)',
    border: '1px black solid',
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    color: '#fff',
    height: 48,
    minWidth: '120px',
    padding: '0 30px',
    cursor: 'pointer'
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
