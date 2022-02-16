import React from "react";

export const SearchCity = (props) => {

    const handlerOnChangeSearch = (e) => {
        props.onChange(e.target.value);
    }

    const handlerOnKeyPressSearch = (e) => {
        if (e.key === "Enter") {
            props.onKeyPress();
        }
    }

    return(
        <div className="search" >
            <input
                type="text"
                placeholder="Введите название города"
                value={props.value}
                onChange={handlerOnChangeSearch}
                onKeyPress={handlerOnKeyPressSearch}
            />
        </div>
    )
}