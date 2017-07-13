import axios from "axios";
import querystring from 'querystring';

const ROOT_URL = "http://localhost:3000/api/yelp/search"

export const 	FETCH_RESTAURANT = "FETCH_RESTAURANT";

export function fetchRestaurant(query) {
	const request = axios({
		url: `${ROOT_URL}?${querystring.stringify({'term': query.term, 'location': query.location})}`,
		method: 'get',
		responseType: 'json',
	});
	console.log(request);
	return {
		type: FETCH_RESTAURANT,
		payload: request,
	};
}