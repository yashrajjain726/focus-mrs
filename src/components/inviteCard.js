import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop:'5%',
    padding:'2% '
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 25,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Paper className={classes.root} elevation={3}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" align="left">
         {props.class}
        </Typography>
        <Typography align="left" >
          {props.date}
        </Typography>
        <Typography variant="body2" component="p" align="left" style={{color:'#000'}}>
          {props.teacher}
        </Typography>
      </CardContent>
      <CardActions >
       {/* <a href="/advertising" style={{textDecoration:'none'}}> */}
       <Button style={{align:"left",backgroundColor:'#047BD5',float:'left',width:'25%'}}>Join</Button>
       {/* </a> */}
      </CardActions>
    </Paper>
  );
}
