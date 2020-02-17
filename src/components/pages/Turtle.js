import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


import Booklist from '../net-ninja-booklist/Booklist';
import AddBook from '../net-ninja-booklist/AddBook';

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0
    }
  })
);


const Turtle = () => {

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
            <h2>The Net Ninja Book List</h2>
          </Typography>

          <Typography component="div" style={{
            backgroundColor: '#fff',
            minHeight: 'calc(100vh)',
            padding: 20
          }}>
            <Container maxWidth="md">

              <Booklist />
              <AddBook />

            </Container>
          </Typography>


        </Container>
      </React.Fragment>
    );

};

export default Turtle;
