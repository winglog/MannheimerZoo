import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';

import WizardForm from '../WizardForm';
import showResults from "../showResults";

const Hund = () => {

  const theme = useTheme();

  return (
    <React.Fragment>

      <Container maxWidth="lg">
        <Typography component="div" style={{
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.secondary.contrastText,
          height: '220px',
          paddingTop: '20px',
          paddingLeft: '320px',
        }}>
          <h2>Wizard</h2>
          Wizard example
          <p>from: <a href='https://redux-form.com/8.3.0/examples/wizard/' target='blank'>redux-form example</a></p>
        </Typography>

        <Typography component="div" style={{
          backgroundColor: '#fff',
          minHeight: 'calc(100vh - 30px)',
          padding: 20
        }}>
          <Container maxWidth="xs">
            <WizardForm onSubmit={showResults}/>
          </Container>
        </Typography>

      </Container>


    </React.Fragment>

  )
}

export default Hund