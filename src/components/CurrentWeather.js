import React, { Component } from 'react';
import FiveDays from "./FiveDays";
import '../CurrentWeather.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
   
    root:{
    height: "30%",
    border: "2px solid black",
    margin: "1%",
    padding: "1%",
    textAlign: "center",
    display: "flex",
    alignItems: "center",    
    },
    icon: {
        marginRight: "5px",
    },
    title:{
        textAlign: "center",
        border: "borderNull"
    }
      })

class CurrentWeather extends Component {
    render() {
        const classes=this.props.classes
        return (
            <div class="flex-container">
            <div class="upRow">
            <Paper className={classes.root}>
      <Typography variant="h6">
     Tel Aviv 38c
      </Typography>
    </Paper>
      <Paper className={classes.root}>
      <FavoriteIcon className={classes.icon}/>
      <Typography variant="h6">
     Add to Favorites
      </Typography>
    </Paper>
            </div>
            <Paper className={classes.title} elevation={0}>
      <Typography variant="h5">
     Sunny Day
      </Typography>
    </Paper>            
    <div class="downRow">
                <FiveDays/>
                <FiveDays/>
                <FiveDays/>
                <FiveDays/>
                <FiveDays/>  
            </div>
            </div>
        );
    }
}

export default withStyles(styles) (CurrentWeather);