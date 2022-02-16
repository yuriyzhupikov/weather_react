
export const CartInfoCityWeather = ({data}) => {
    return(
        <div className="city">
            <div className="date"> {new Date().toDateString("en-US")}</div>

            <h2 className="city-name">
                <span>{data.name}</span>
                <sup>{data.sys.country}</sup>
            </h2>
            <div className="city-temp">
                {Math.round(data.main.temp)}
                <sup>&deg;C</sup>
            </div>
            <div className="info">
                <img
                    className="city-icon"
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt={data.weather[0].description}
                />
                <p>{data.weather[0].description}</p>
            </div>
        </div>
    )
}