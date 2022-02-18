import {SearchCity} from "./components/SearchCity";
import {CartInfoCityWeather} from "./components/CartInfoCityWeather";
import {useSelector} from "react-redux";

function App() {
    const weatherData = useSelector(state => state.weather.loadedDataWeather);
    const loading = useSelector(state => state.weather.loaderDataWeather);

    return (
        <div className="container">
            <SearchCity />
            {!loading && weatherData.main && <CartInfoCityWeather data={weatherData} /> }
        </div>
    );
}

export default App;
