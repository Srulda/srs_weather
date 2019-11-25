import React, { Component } from 'react'
import FiveDays from './FiveDays'
import '../CurrentWeather.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '3% 0',
    height: '75vh',
  },
  paper: {
    height: '30%',
    border: '2px solid black',
    margin: '1%',
    padding: '1%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '5px',
  },
  title: {
    textAlign: 'center',
  },
  upRow: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100px',
    padding: '0 3%'
  },
  downRow: {
    display: 'flex',
    justifyContent: 'center',
  },
})

class CurrentWeather extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.mainContainer}>
        <div className={classes.upRow}>
          <Paper className={classes.paper}>
            <Typography variant='h6'>Tel Aviv 38c</Typography>
          </Paper>
          <Paper className={classes.paper}>
            <FavoriteIcon className={classes.icon} />
            <Typography variant='h6'>Add to Favorites</Typography>
          </Paper>
        </div>
        <div className={classes.title} elevation={0}>
          <Typography variant='h5'>Sunny Day</Typography>
        </div>
        <div className={classes.downRow}>
          <FiveDays />
          <FiveDays />
          <FiveDays />
          <FiveDays />
          <FiveDays />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(CurrentWeather)
