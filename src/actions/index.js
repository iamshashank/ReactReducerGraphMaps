const API_KEY = 'fd238e6b9b5f2481aeb2a369be605844';
let URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
import axios from 'axios';
//we are going to use a middleware 
//which will intercept the action
//before it is sent to all the reducers
//these middleware will fetch the weather data and
//will sent this new data to all the reducers
//then the appropriate reducer will update the state
//and re-ender

export const FETCH_WEATHER = 'FETCH_WEATHER';

//action creater
export function fetchWeather(city){
	const url = `${URL}&q=${city},in`;
	const request = axios.get(url);
	console.log('Request: ',request);
	return {
		type:FETCH_WEATHER,
		payload:request
	}
}

