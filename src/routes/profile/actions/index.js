import axios from "axios";

export const FETCH_RESTAURANTLIST = "FETCH_RESTAURANTLIST";
export const FETCH_TAGLIST = "FETCH_TAGLIST";
export const SELECT_RESTAURANTS= "SELECT_RESTAURANTS";
export const FETCH_FRIENDLIST = "FETCH_FRIENDLIST";
export const ADD_FRIENDS = "ADD_FRIENDS";

export function fetchRestaurantList(query) {
	const request = axios({
		url: '/api/user/restaurants',
		method: 'get',
		responseType: 'json',
	});
	return {
		type: FETCH_RESTAURANTLIST,
		payload: request,
	};
}

export function fetchTagList() {
	const request = axios({
		url: '/api/user/tags',
		method: 'get',
		responseType: 'json',
	});
	return {
		type: FETCH_TAGLIST,
		payload: request,
	};
}

export function selectRestaurants(selectedRows) {
		return {
		type: SELECT_RESTAURANTS,
		payload: selectedRows
	};
}

export function fetchFriendList(query) {
	const request = axios({
		url: '/api/user/friends',
		method: 'get',
		responseType: 'json',
	});
	return {
		type: FETCH_FRIENDLIST,
		payload: request,
	};
}

export function addFriends(params) {
	const request = axios({
		url: 'api/user/friends',
		method: 'post',
		data: params,
		responseType: 'json'
	})
	return {
		type: ADD_FRIENDS,
		payload: request
	}
}