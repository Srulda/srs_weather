import React, { Component } from 'react';
import '../CurrentWeather.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
   
card:{
    margin: "5%",
    minWidth: 100,
    textAlign: "center",
}
  })
  

class FiveDays extends Component {
    render() {
        const classes=this.props.classes
        return (
            <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom variant="h4">
        Sun 
       </Typography>
        <Typography className={classes.pos} color="textSecondary" variant="h6">
        30c
        </Typography>
      </CardContent>
      
    </Card>
        );
    }
}

export default withStyles(styles) (FiveDays);