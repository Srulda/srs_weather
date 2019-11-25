import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import CurrentWeather from "./CurrentWeather";
import SearchInput from "./SearchInput";

@observer
@inject("weatherStore")
class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }

  displayCities =  async (e) =>{
    await this.inputHandler(e)
    let x = await this.props.weatherStore.displayFilteredData(this.state.searchInput)
    console.log(x)
    
  }
  inputHandler = e => {
     this.setState( {[e.target.id] : e.target.value} )
  };




  render() {
    return (
      <div>
        <div>
      <SearchInput/>
      <CurrentWeather/>
        </div>
      </div>
    );
  }
}

export default Home;
