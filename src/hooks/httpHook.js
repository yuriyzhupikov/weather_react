import {useCallback, useState} from "react";

const URL_ADDRESS = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "766d7577748914110bce4ebcc1f6777c";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = useCallback(async (query) => {
        try {
            setLoading(true);

            const res = await fetch(URL_ADDRESS + new URLSearchParams({
                q: query,
                units: 'metric',
                appid: API_KEY
            }));

            const data = await res.json();

            if(!res.ok) {
                throw new Error(data.message || 'При загрузке данных произошла ошибка');
            }

            setLoading(false);
            return data;

        }catch (e) {
            setLoading(false);
            setError(true);
            throw e;
        }
    }, []);
    return {loading, error, request}
}