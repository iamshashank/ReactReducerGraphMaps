import React from 'react';


class GoogleMap extends React.Component{

	componentDidMount(){
		new google.maps.Map(
			this.refs.map,
			{
				zoom:12,
				center:{
					lat:this.props.lat,
					lng:this.props.lon
				}
			}
		);
	}

	render(){
		//direct refernce of html element
		//this.refs.map
		return <div ref="map" />
	}
}

export default GoogleMap;