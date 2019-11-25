import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

@observer
@inject("weatherStore")
class AutoComplete extends Component {
    render() {
        return (
            <div>
        {this.props.weatherStore.autoCompleteOptions.map(l => <li>{l.city}, {l.country}</li>)}
            </div>
        );
    }
}

export default AutoComplete;