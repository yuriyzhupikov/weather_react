import {LOADER_WEATHER, LOADED_DATA_WEATHER} from "./types";

export function loaderDataWeather(param) {
    return {
        type: LOADER_WEATHER,
        payload: param
    }
}

export function loadDataWeather (request, query) {

    return async dispatch => {
        try {
            dispatch(loaderDataWeather(true));
            const data = await request(query);
            dispatch( {type: LOADED_DATA_WEATHER, payload: data});
            dispatch(loaderDataWeather(false));
        } catch (e) {
            dispatch(loaderDataWeather(false));
        }
    }
}
