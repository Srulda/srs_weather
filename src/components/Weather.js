import React, { Component } from "react";
import "../CurrentWeather.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import { observer, inject } from "mobx-react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import moment from "moment";

const styles = theme => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "3% 0",
    height: "75vh"
  },
  paper: {
    height: "30%",
    border: "2px solid black",
    margin: "1%",
    padding: "1%",
    textAlign: "center",
    display: "flex",
    alignItems: "center"
  },
  icon: {
    marginRight: "5px"
  },
  title: {
    textAlign: "center"
  },
  upRow: {
    display: "flex",
    justifyContent: "space-between",
    height: "100px",
    padding: "0 3%"
  },
  downRow: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    margin: "5%",
    minWidth: 100,
    textAlign: "center"
  }
});

@observer
@inject("weatherStore")
class Weather extends Component {
  render() {
    const current = this.props.weatherStore.currentWeather;
    const fiveDays = this.props.weatherStore.fiveDaysForecast;
    const { classes } = this.props;

    return (
      <div className={classes.mainContainer}>
        <div className={classes.upRow}>
          <Paper className={classes.paper}>
            <Typography variant="h6">
              {this.props.location.split(",")[0]}{" "}
              {current.Temperature.Metric.Value}°
            </Typography>
          </Paper>
          <Paper className={classes.paper}>
            <FavoriteIcon className={classes.icon} />
            <Typography variant="h6">Add to Favorites</Typography>
          </Paper>
        </div>
        <div className={classes.title} elevation={0}>
          <Typography variant="h5">{current.WeatherText}</Typography>
        </div>
        <div className={classes.downRow}>
          {fiveDays.map(t => (
            <Card className={classes.card} key={t.EpochDate}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                  variant="h4"
                >
                  {
                    moment(t.Date)
                      .format("llll")
                      .split(",")[0]
                  }
                </Typography>
                <Typography
                  className={classes.pos}
                  color="textSecondary"
                  variant="h6"
                >
                  {t.Temperature.Minimum.Value}°-
                  {t.Temperature.Maximum.Value}°
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Weather);
