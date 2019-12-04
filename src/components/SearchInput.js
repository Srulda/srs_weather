import React, { Component } from 'react'
import { FormControl, Input, InputAdornment, FormHelperText } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  formControl: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10%',
  },
  input: {
    width: '40%',
  },
  errorText: {
    width: '40%',
    border: 'none',
  },
})

class searchInput extends Component {
  render() {
    const { classes, displayCities, searchInput, openPopper, isError, errorText } = this.props

    return (
      <FormControl className={classes.formControl} onFocus={openPopper}>
        <Input
          className={classes.input}
          id="searchInput"
          value={searchInput}
          onChange={displayCities}
          error={isError}
          autoComplete='off'
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
        {isError ? (
          <FormHelperText className={classes.errorText} error>
            {errorText}
          </FormHelperText>
        ) : (
          ''
        )}
      </FormControl>
    );
  }
}

export default withStyles(styles)(searchInput);
