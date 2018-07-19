import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state={term:""};
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(event){
		event.preventDefault();
		//make an api request
		this.props.fetchWeather(this.state.term);
		this.setState({term:''});

	}


	render(){
		return (
			<form className="input-group" 
			onSubmit={this.onFormSubmit}
			>
			<input 
			className="form-control"
			placeholder="Get a next-5 day forcast" 
			value={this.state.term} onChange={(event)=>{this.setState({term:event.target.value})}} />
			<span className="input-group-btn">
			<button type="submit" className="btn btn-secondary">Search</button>
			</span>
			</form>
			);
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather},dispatch);
}


export default connect(null,mapDispatchToProps)(SearchBar);