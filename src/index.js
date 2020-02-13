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

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import rgb1 from '@material-ui/core/colors/lightGreen';
import rgb2 from '@material-ui/core/colors/grey';

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
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
