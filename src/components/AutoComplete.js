import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Popper, List, ListItem } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  popper: {
    border: "1px solid #c9c9c9",
    borderTop: 0,
    width: "40%"
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper
  }
});

@observer
@inject("weatherStore")
class AutoComplete extends Component {

  getWeather = async (cityKey, cityName, country) => {
    await this.props.weatherStore.getWeather(cityKey);
    this.props.updateSelectedToInput(cityName, country);
    this.props.closePopper();
  };

  render() {
    const { classes, weatherStore, open, anchorEl } = this.props
    if (!weatherStore.autoCompleteOptions.length) {
      return <React.Fragment />
    }
    return (
      <div>
        <Popper className={classes.popper} open={open} anchorEl={anchorEl}>
          {weatherStore.autoCompleteOptions.map(l => (
            <div className={classes.paper} key={l.key}>
              <List dense>
                <ListItem
                  button
                  onClick={() => this.getWeather(l.key, l.city, l.country)}
                >
                  {l.city}, {l.country}
                </ListItem>
              </List>
            </div>
          ))}
        </Popper>
      </div>
    );
  }
}

export default withStyles(styles)(AutoComplete);