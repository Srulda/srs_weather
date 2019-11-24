import React, { Component } from 'react'

import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
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
  },
})

class Navbar extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              Weather App
            </Typography>
            <div className={classes.buttonsContainer}>
              <Button className={classes.button} variant='contained' color='secondary'>
                Home
              </Button>
              <Button variant='contained' color='secondary'>
                Favorites
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar)
