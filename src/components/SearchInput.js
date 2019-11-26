import React, { Component } from "react";
import { FormControl, Input, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  formControl: {
    display: "flex",
    alignItems: "center"
  },
  input: {
    width: "40%"
  }
});

class searchInput extends Component {
  render() {
    const { classes, displayCities, searchInput, openPopper } = this.props;
    return (
      <FormControl className={classes.formControl} onFocus={openPopper}>
        <Input
          className={classes.input}
          id="searchInput"
          value={searchInput}
          onChange={displayCities}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    );
  }
}

export default withStyles(styles)(searchInput);
