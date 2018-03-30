import axios from 'axios';

const API_KEY = '0a3f42000616697a59b91d4f50fb63d0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // Promise is returned as Request
    // Processed by Redux Promise Middleware
    // Middleware resolves Promise, creates a new action and asses to reducer

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}