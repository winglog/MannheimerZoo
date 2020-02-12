
import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import blueGrey from '@material-ui/core/colors/blueGrey';

const useStyles = makeStyles(theme => ({
    root: {
    height: 160,
    width: 220,
  },
  media: {
    height: 40,
  },
  content: {
    height: 240,
    color: theme.palette.text.secondary
  },
  distanceTop: {
    marginTop: 20
  }
}));


export default function Tile({displayIcon, title}) {
  const classes = useStyles();

  let history = useHistory();

  const onRedirect = (target) => {
    const pattern = '/' + target;
    console.log(pattern);
    history.push(pattern);
  };

  return (
    <Card className={classes.root} elevation={3} variant="outlined" onClick={(event)=>{
      onRedirect(title);
    }}>
      <CardActionArea>
        <CardContent className={classes.content}>
          {displayIcon()}
          <Typography variant="body2" color="textSecondary" component="p" className={classes.distanceTop}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
