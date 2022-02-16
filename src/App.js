import {useHttp} from "./hooks/httpHook";
import {SearchCity} from "./components/SearchCity";
import {CartInfoCityWeather} from "./components/CartInfoCityWeather";
import {useState} from "react";

function App() {
    const {loading, request} = useHttp();

    const [valueQuery, setValueQuery] = useState('');
    const [weatherData, setWeatherData] = useState({});

    const handlerOnChangeSearch = (value) => {
          setValueQuery(value);
    }

    const handlerOnKeyPressSearch = async () => {
        const data = await request(valueQuery);

        setWeatherData(data);
        setValueQuery('');

    }

    if (loading) {
        return <div>Данные загружаются</div>
    }

    return (
        <div className="container">
            <SearchCity
                value={valueQuery}
                onChange={handlerOnChangeSearch}
                onKeyPress={handlerOnKeyPressSearch}
            />
            { !loading && weatherData.main && <CartInfoCityWeather data={weatherData} /> }
        </div>
    );
}

export default App;
