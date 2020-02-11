/****************************************************************************
 * Lessons learnt:
 *
 * Use Container inside Container to do horizontal centering!
 * Use Typography to set background color behind your form!
 * Use useTheme-hook to reference the main theme colors
 *
 ****************************************************************************/
 import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import MaterialUiForms from '../MaterialUiForms';
import showResults from "../showResults";

import { useTheme } from '@material-ui/core/styles';

const Tiger = () => {

  const theme = useTheme();

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Typography component="div" style={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          height: '8vh',
          padding: 20
        }}>
          <h2>Material UI Example</h2>
        </Typography>
        <Typography component="div" style={{
          backgroundColor: '#fff',
          height: '70vh',
          padding: 20
        }}>
          <Container maxWidth="xs">
            <MaterialUiForms onSubmit={showResults}/>
          </Container>
        </Typography>
        <Typography component="div" style={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          height: '8vh',
          padding: 20
        }}>
        </Typography>
      </Container>
    </React.Fragment>
  )
}

export default Tiger

