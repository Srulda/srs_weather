import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

@observer
@inject("weatherStore")
class AutoComplete extends Component {

    getWeather = (cityKey) =>  this.props.weatherStore.getWeather(cityKey)
        
    

    render() {
        return (
            <div>
                {this.props.weatherStore.autoCompleteOptions.map(l => <div onClick = {() => this.getWeather(l.key)} key={l.key}>{l.city}, {l.country}</div>)}
            </div>
        );
    }
}

export default AutoComplete;