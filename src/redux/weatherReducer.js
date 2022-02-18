import {LOADED_DATA_WEATHER, LOADER_WEATHER} from "./types";

const initialState = {
    loadedDataWeather:'',
    loaderDataWeather: false
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADER_WEATHER :
            return {...state, loaderDataWeather: action.payload};
        case LOADED_DATA_WEATHER :
            return {...state, loadedDataWeather: action.payload};
        default: return state;
    }
}