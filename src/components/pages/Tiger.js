/****************************************************************************
 * Lessons learnt:
 *
 * Use Container inside Container to do horizontal centering!
 * Use Typography to set background color behind your form!
 * Use useTheme-hook to reference the main theme colors
 * This is one option to force the footer to stay in its position: Use minHeight: 'calc(100vh - 360px)'
 *
 ****************************************************************************/
import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import MaterialUiForms from '../MaterialUiForms';
import showResults from "../showResults";

import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0
    }
  })
);

const Tiger = () => {

  const theme = useTheme();
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Typography component="div" style={{
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.contrastText,
          height: '80px',
          padding: 20
        }}>
          <h2>Material UI Example</h2>
        </Typography>

        <Typography component="div" style={{
          backgroundColor: '#fff',
          minHeight: 'calc(100vh - 360px)',
          padding: 20
        }}>
          <Container maxWidth="xs">
            <MaterialUiForms onSubmit={showResults} />
          </Container>
        </Typography>

        <Typography component="div" style={{
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.contrastText,
          height: '80px',
          padding: 20,
          top: 'auto',
          bottom: 0
        }}>
        </Typography>

      </Container>
    </React.Fragment>
  )
}

export default Tiger

