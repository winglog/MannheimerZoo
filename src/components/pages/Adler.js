/****************************************************************************
 * Lessons learnt:
 *
 * - Fixed Footer with centered Footer Title
 * - Zooming button for back to top scrolling
 *
 ****************************************************************************/
import React from 'react';
import PropTypes from 'prop-types';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import MuiFormCountries from '../MuiFormCountries';
import showResults from "../showResults";

import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0
    },
    grow: {
      flexGrow: 1,
    },
    backToTopButton: {
      position: 'fixed',
      bottom: '100px',
      right: theme.spacing(2),
    }
  })
);

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.backToTopButton}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Adler = (props) => {

  const theme = useTheme();
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Typography component="div" style={{
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.secondary.contrastText,
          height: '150px',
          padding: '10px 160px',
        }}>
          <h2>Material UI Form with AutoComplete Input Field</h2>
        </Typography>

        <Typography component="div" style={{
          backgroundColor: '#fff',
          minHeight: 'calc(100vh - 30px)',
          padding: 20
        }}>
          <Container maxWidth="xs">
            <MuiFormCountries onSubmit={showResults}/>
          </Container>
        </Typography>

        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>

        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <div className={classes.grow} />
            <Typography variant="h6" component="a">
              Fixed Footer
            </Typography>
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>

      </Container>


    </React.Fragment>
  )
}

export default Adler

