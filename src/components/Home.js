import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import AutoComplete from "./AutoComplete";

@observer
@inject("weatherStore")
class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      isCityDisplay : false
    };
  }

  displayCities =  async (e) =>{
    await this.inputHandler(e)
    await this.props.weatherStore.displayFilteredData(this.state.searchInput)
     this.setState({ isCityDisplay : true})

  }

  inputHandler = e => {
    this.setState( {[e.target.id] : e.target.value} )
  }


  render() {
    return (
      <div>
        <div>
          <input type="text"
          id = "searchInput"
          value = {this.state.searchInput}
          onChange = {this.displayCities} 
           />
          <button onClick = {this.getWeather}>search</button>
        </div>
        <div>{ this.state.isCityDisplay ? <AutoComplete /> : null} </div>
      </div>
    );
  }
}

export default Home;


