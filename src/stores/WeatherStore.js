import { observable, action } from "mobx";
import Axios from "axios";
import data from "../data";
import config from "../config";

export class WeatherStore {
  @observable autoCompleteOptions = [];
  @observable currentWeather = {};
  @observable fiveDaysForecast = [];

  @action displayFilteredData = searchInput => {
    const options = data.filter(obj =>
      obj.LocalizedName.toLowerCase().includes(searchInput.toLowerCase())
    );
    const filteredOptions = options.map(l => ({
      city: l.LocalizedName,
      country: l.Country.LocalizedName,
      key: l.Key
    }));
    this.autoCompleteOptions = filteredOptions;
    return filteredOptions;
  };

  @action getWeather = async cityKey => {
    let current = await Axios.get(
      `${config.URL_CURRENT}${cityKey}?apikey=${config.API_KEY}&language=en-us`
    );
    let fiveDays = await Axios.get(
      `${config.URL_FIVE_DAYS}${cityKey}?apikey=${config.API_KEY}&language=en-us&metric=true`
    );
    this.currentWeather = current.data[0];
    this.fiveDaysForecast = fiveDays.data.DailyForecasts;
    console.log(current.data[0]);
    console.log(fiveDays.data.DailyForecasts);
  };
}
