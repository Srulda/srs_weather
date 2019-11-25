import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    inputContainer: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },

      })

class searchInput extends Component {
    render() {
        const { classes } = this.props
        return (
            <div component="form" className={classes.inputContainer} >
            <InputBase
              className={classes.input}
              placeholder="Search City"
              inputProps={{ 'aria-label': 'search city' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>            
          </div>
        );
    }
}

export default withStyles(styles) (searchInput);