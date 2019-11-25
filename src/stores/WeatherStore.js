import {observable, action } from "mobx";
import data from "../data"

export class WeatherStore {
@observable autoCompleteOptions = []

@action displayFilteredData = (searchInput) => {
const options = data.filter(obj =>
    obj.LocalizedName
    .toLowerCase()
    .includes(searchInput.toLowerCase())
    )
const filteredOptions = options.map(l => ( {city : l.LocalizedName, country: l.Country.LocalizedName, key : l.Key}) )
this.autoCompleteOptions = filteredOptions
        return filteredOptions
    }

// @action displayAutoComplereOptions = () =>{
//    return this.autoCompleteOptions.map(l => <li>{l.city}, {l.country}</li>)
// }

}
