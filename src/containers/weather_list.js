import React from 'react';
import {connect} from 'react-redux';
//import {Sparklines,SparklinesLine} from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends React.Component{

	renderWeather(cityData){
		console.log("Testing",cityData);

		const temps = cityData.list.map((weather)=>{return weather.main.temp;});
		const humidity = cityData.list.map((weather)=>{return weather.main.humidity;});
		const pressure = cityData.list.map((weather)=>{return weather.main.pressure;});
		
		console.log(temps);
		return (
			<tr key={cityData.city.id}>
			<td>
				<GoogleMap lat={cityData.city.coord.lat} lon={cityData.city.coord.lon} />
			</td>
			<td>
			<Chart data={temps} color="red" />
			</td>
			<td>
			<Chart data={pressure} color="green" />
			</td>
			<td>
			<Chart data={humidity} color="blue" />
			</td>
			</tr>
			);
	}
	
	render(){
		return (
			<table className="table tabel-hover">
			<thead>
			<tr>
				<th>City</th>
				<th>Temprature</th>
				<th>Pressure</th>
				<th>Humidity</th>
				</tr>
			</thead>
			<tbody>
				{this.props.weather.map(this.renderWeather)}
			</tbody>
			</table>
			);
	}
}


function mapStateToProps(state){
	return {weather:state.weather};
}

// function mapStateToProps({weather}){
// 	return {weather};
// }

export default connect(mapStateToProps)(WeatherList);