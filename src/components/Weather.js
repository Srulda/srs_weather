import React, { Component } from "react";
import "./styles/weather.css";
import { observer, inject } from "mobx-react";
import moment from "moment";
@inject("weatherStore")
@observer
class Weather extends Component {
  render() {
    const current = this.props.weatherStore.currentWeather;
    const fiveDays = this.props.weatherStore.fiveDaysForecast;

    return (
      <div id="weatherContainer">
        <div id="currentWeather">
          <div id="currentTemp">
            {" "}
            {this.props.location.split(",")[0]}{" "}
            {Math.round(current.Temperature.Metric.Value)}°
          </div>

          <div id="weatherText">{current.WeatherText}</div>
        </div>

        <div id="dailyCard">
          {fiveDays.map(t => (
            <div id="dayText" key={t.EpochDate}>
              {
                moment(t.Date)
                  .format("llll")
                  .split(",")[0]
              }
              <div id="fiveDaysTemp">
                <span id = "min">{Math.floor(t.Temperature.Minimum.Value)}°</span> {' '} 
                <span id = "max">{Math.ceil(t.Temperature.Maximum.Value)}°</span>
              </div>
              <div id="img">
                {" "}
                <img
                  src={`https://developer.accuweather.com/sites/default/files/${t.Night.Icon}-s.png`}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Weather;
