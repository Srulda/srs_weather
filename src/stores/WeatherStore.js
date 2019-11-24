import {observable, action } from "mobx";
import data from "../data"

export class WeatherStore {
    
@action displayFilteredData = async (searchInput) => {
const options = data.filter(obj =>
    obj.LocalizedName
    .toLowerCase()
    .includes(searchInput.toLowerCase())
    )
    return options.map(l => ( {city : l.LocalizedName, country: l.Country.LocalizedName}) )
    }
}


