import React from 'react';

import { useSelector } from 'react-redux';


import { makeStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tile from './Tile';
import aCards from '../mockdata/tilesData';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    backgroundColor: blueGrey[50]
  }
}));

export default function NestedGrid() {

  const classes = useStyles();
  const sFilter = useSelector(state => state.tiles.sFilter);

  function FormRow() {

    return (
        aCards.filter( (card)=>{
          let bFound = true;
          if(sFilter && sFilter !== '') {
            if( card.title && card.title !== '') {
              bFound = (card.title.toLowerCase().indexOf( sFilter.toLowerCase() ) > -1 );
            }
          }
          return card.visible && bFound;
        })
        .map( (card,index) => {
          return [
            <React.Fragment key={index}>
              <Grid item xs={12} sm={6} md={3} lg={2}>
                <Tile displayIcon={card.displayIcon} title={card.title} />
              </Grid>
            </React.Fragment>
          ]
        })
    );
  }

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={4}>
        <Grid container item xs={12} spacing={8}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
