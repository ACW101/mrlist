import axios from "axios";
import querystring from 'querystring';

export const FETCH_RESTAURANT_SUCCESS = "FETCH_RESTAURANT_SUCCESS";
export const ADD_RESTAURANT = "ADD_RESTAURANT";

export function fetchRestaurant(query) {
	return (dispatch) => {
		const request = axios({
			url: `/api/yelp/search?${querystring.stringify({'term': query.term, 'location': query.location})}`,
			method: 'get',
			responseType: 'json',
		}).then(res => {
			dispatch(fetchRestaurantSuccess(res));
		})

	}
	// return {
	// 	type: FETCH_RESTAURANT,
	// 	payload: request,
	// };
}
export function fetchRestaurantSuccess(res) {
	return {
		type: FETCH_RESTAURANT_SUCCESS,
		payload: res
	}
}

export function addRestaurant(restaurantData, callback) {
		return (dispatch) => {
			// create new row in restaurants
		const request = axios({
			url: `api/restaurant`,
			data: { name: restaurantData.name, yelp_id: restaurantData.id },
			method: 'post',
			responseType: 'json',
		})
		// create new row in user_restaurant relation
		.then((response) => {
			const restaurant_id = response.data.results.id;
			const request = axios({
				url: `/api/user/restaurants/${restaurant_id}`,
				method: 'put',
				responseType: 'json'
			})
			dispatch(fireSnackbar());
		})
		return {
			type: ADD_RESTAURANT,
			payload: request,
		}
	}
}

export const FIRE_ADDRESTAURANT_SNACKBAR = "FIRE_ADDRESTAURANT_SNACKBAR"
export function fireSnackbar() {
	return {
		type: FIRE_ADDRESTAURANT_SNACKBAR,
		payload: true
	}
}
export const HIDE_ADDRESTAURANT_SNACKBAR = "HIDE_ADDRESTAURANT_SNACKBAR"
export function hideSnackbar() {
	return {
		type: HIDE_ADDRESTAURANT_SNACKBAR,
		payload: false
	}
}