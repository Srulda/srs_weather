import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import Weather from "./Weather";
import SearchInput from "./SearchInput";
import AutoComplete from "./AutoComplete";
import Loading from "./Loading";

@observer
@inject("weatherStore")
class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "Tel-Aviv, Israel",
      isCityDisplay: false,
      anchorEl: null,
      isLoading: true
    };
  }

  componentDidMount =  async() => {
    await this.props.weatherStore.getDefaultLocation()
    this.setState({ isLoading : false})
} 

  displayCities = async e => {
    await this.inputHandler(e);
    await this.props.weatherStore.displayFilteredData(this.state.searchInput);
    this.setState({ isCityDisplay: true }, () => {});
  };

  inputHandler = e => this.setState({ [e.target.id]: e.target.value });

  updateSelectedToInput = (city, country) => this.setState({ searchInput: `${city}, ${country}` })

  openPopper = e => {
    const { anchorEl } = this.state;
    this.setState({ anchorEl: anchorEl ? null : e.currentTarget })}

  closePopper = () => this.setState({ isCityDisplay: false})
  
  render() {
    const { searchInput, isCityDisplay, anchorEl } = this.state;

    return (
      <div>
        <SearchInput
          displayCities={this.displayCities}
          inputHandler={this.inputHandler}
          searchInput={searchInput}
          openPopper={this.openPopper}
        />
        <div>
          {isCityDisplay ? (
            <AutoComplete
              open={isCityDisplay}
              anchorEl={anchorEl}
              updateSelectedToInput={this.updateSelectedToInput}
              closePopper={this.closePopper}
            />
          ) : null}
        </div>
        <div>
          {this.state.isLoading ? (
            <Loading />
          ) : (
            <Weather location={this.state.searchInput} />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
