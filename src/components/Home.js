import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import AutoComplete from "./AutoComplete";

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
    await this.props.weatherStore.displayFilteredData(this.state.searchInput)
    
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
          <button>search</button>
        </div>
      </div>
    );
  }
}

export default Home;


