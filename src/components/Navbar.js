import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { AppBar, Toolbar, Typography, Button, ButtonGroup } from '@material-ui/core'

import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonsContainer: {
    display: 'flex',
    width: '20%',
    justifyContent: 'space-around',
  },
  button: {
    textTransform: 'none',
  },
  activeButton: {
    background: theme.palette.secondary.main,
  },
})

class Navbar extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              Weather App
            </Typography>
            <ButtonGroup>
              <Button variant='outlined' className={classes.button}>
                <Link to={`/`} style={{ color: '#000', textDecoration: 'none' }}>
                  Home
                </Link>
              </Button>
              <Button variant='outlined' className={classes.button}>
                <Link to={`/favorites`} style={{ color: '#000', textDecoration: 'none' }}>
                  Favorites
                </Link>
              </Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar)
