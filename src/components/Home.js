import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import CurrentWeather from './CurrentWeather'
import SearchInput from './SearchInput'
import AutoComplete from './AutoComplete'
import { set } from 'mobx'

@observer
@inject('weatherStore')
class Home extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: '',
      isCityDisplay: false,
      anchorEl: null,
      isError: false,
      errorText: '',
    }
  }

  displayCities = async e => {
    await this.inputHandler(e)
    await this.props.weatherStore.displayFilteredData(this.state.searchInput)
    this.setState({ isCityDisplay: true })
  }

  getErrorText = inputText => {
    const english = /^[A-Za-z]*$/
    const isEnglishChar = english.test(inputText)
    let errorText = ''

    if (inputText.length === 0) {
      this.setState({ isError: false })
    } else if (!isEnglishChar) {
      this.setState({ isError: true })
      errorText = 'Please use english characters only'
    } else if (this.props.weatherStore.autoCompleteOptions.length) {
      this.setState({ isError: true })
      errorText = 'No results'
    }
    this.setState({ errorText })
  }

  inputHandler = e => {
    this.setState({ [e.target.id]: e.target.value }, () =>
      this.getErrorText(this.state.searchInput)
    )
  }

  openPopper = event => {
    const { anchorEl } = this.state
    this.setState({ anchorEl: anchorEl ? null : event.currentTarget })
  }

  closePopper = () => {
    this.setState({ isCityDisplay: false })
  }

  updateSelectedToInput = (city, country) => {
    this.setState({ searchInput: `${city}, ${country}` })
  }

  render() {
    const { searchInput, isCityDisplay, anchorEl, isError, errorText } = this.state

    return (
      <div>
        <SearchInput
          displayCities={this.displayCities}
          inputHandler={this.inputHandler}
          searchInput={searchInput}
          openPopper={this.openPopper}
          isError={isError}
          errorText={errorText}
        />
        {/* <button onClick={this.getWeather}>search</button> */}
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
        <CurrentWeather />
      </div>
    )
  }
}

export default Home
