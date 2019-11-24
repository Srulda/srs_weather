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
              {/* <Link to={`/`} style={{ textDecoration: 'none' }}> */}
              <Button variant='outlined' className={classes.button}>
                Home
              </Button>
              {/* </Link> */}
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
