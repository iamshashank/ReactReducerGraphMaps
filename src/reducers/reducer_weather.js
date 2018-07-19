import {FETCH_WEATHER} from '../actions/index';

export default function(state = [],action){
	console.log("Reducer Called",action);
	switch(action.type){
		case FETCH_WEATHER:
		//never modify state in redux
		//instead always return a new instance of state
		//state.push([bla,bla,bla])
		//this is wrong
		//instead
		//return state.concat([action.payload.data]);
		//console.log([action.payload.data, ...state]);
		return [action.payload.data, ...state];
	}
	return state;
}