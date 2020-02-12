import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';

import SelectingFormValuesForm from '../SelectingFormValuesForm';
import showResults from "../showResults";

const Papagei = () => {

  const theme = useTheme();

  return (
    <React.Fragment>

      <Container maxWidth="lg">
        <Typography component="div" style={{
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.secondary.contrastText,
          height: '280px',
          padding: '120px',
        }}>
          <h2>formValueSelector</h2>
          reading form values into the redux store and changing the UI dynamically
          <p>from: <a href='https://redux-form.com/8.2.2/examples/selectingformvalues/' target='blank'>redux-form example</a></p>
        </Typography>

        <Typography component="div" style={{
          backgroundColor: '#fff',
          minHeight: 'calc(100vh - 30px)',
          padding: 20
        }}>
          <Container maxWidth="xs">
            <SelectingFormValuesForm onSubmit={showResults}/>
          </Container>
        </Typography>

      </Container>


    </React.Fragment>

  )
}

export default Papagei