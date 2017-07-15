import axios from "axios";
import querystring from 'querystring';

const ROOT_URL = "http://localhost:3000/api"

export const FETCH_RESTAURANT = "FETCH_RESTAURANT";
export const ADD_RESTAURANT = "ADD_RESTAURANT";

export function fetchRestaurant(query) {
	const request = axios({
		url: `${ROOT_URL}/yelp/search?${querystring.stringify({'term': query.term, 'location': query.location})}`,
		method: 'get',
		responseType: 'json',
	});
	console.log(request);
	return {
		type: FETCH_RESTAURANT,
		payload: request,
	};
}

export function addRestaurant(restaurantData, callback) {
	const request = axios({
		url: `${ROOT_URL}/restaurant`,
		data: { name: restaurantData.id },
		method: 'post',
		responseType: 'json',
	}).then((response) => callback(response));
	return {
		type: ADD_RESTAURANT,
		payload: request,
	}
}