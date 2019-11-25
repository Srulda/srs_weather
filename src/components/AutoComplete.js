import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

@observer
@inject("weatherStore")
class AutoComplete extends Component {
    render() {
        return (
            <div>
                {this.props.weatherStore.autoCompleteOptions.map(l => <div key={l.key}>{l.city}, {l.country}</div>)}
            </div>
        );
    }
}

export default AutoComplete;