import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {loadDataWeather} from "../redux/actions";
import {useHttp} from "../hooks/httpHook";

export const SearchCity = () => {

    const dispatch = useDispatch();
    const {request} = useHttp();

    const [query, setQuery] = useState('');

    const handlerOnChangeSearch = (e) => {
        setQuery(e.target.value);
    }

    const handlerOnKeyPressSearch = (e) => {
        if (e.key === "Enter") {
            dispatch(loadDataWeather(request, query));
            setQuery('');
        }
    }

    return(
        <div className="search" >
            <input
                type="text"
                placeholder="Введите название города"
                value={query}
                name="title"
                onChange={handlerOnChangeSearch}
                onKeyPress={handlerOnKeyPressSearch}
            />
        </div>
    )
}