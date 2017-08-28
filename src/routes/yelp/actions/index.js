import axios from "axios";
import querystring from 'querystring';

export const FETCH_RESTAURANT = "FETCH_RESTAURANT";
export const ADD_RESTAURANT = "ADD_RESTAURANT";

export function fetchRestaurant(query) {
	const request = axios({
		url: `/api/yelp/search?${querystring.stringify({'term': query.term, 'location': query.location})}`,
		method: 'get',
		responseType: 'json',
	});
	return {
		type: FETCH_RESTAURANT,
		payload: request,
	};
}

export function addRestaurant(restaurantData, callback) {
	const request = axios({
		url: `api/restaurant`,
		data: { name: restaurantData.id },
		method: 'post',
		responseType: 'json',
	})
	.then((response) => {
		console.log(response);
		const restaurant_id = response.data.results.id;
		const request = axios({
			url: `/api/user/restaurants/${restaurant_id}`,
			method: 'put',
			responseType: 'json'
		})
		return request;
	})
	.then((response) => {
		console.log(response);
		callback(null, response);
	})
	.catch(err =>{
		console.log(err);
		callback(err, null);
	}) 
	

	return {
		type: ADD_RESTAURANT,
		payload: request,
	}
}