import axios from "axios";

export const FETCH_USERLIST = "FETCH_USERLIST";
export const SELECT_RESTAURANTS= "SELECT_RESTAURANTS";
export const FETCH_FRIENDLIST = "FETCH_FRIENDLIST";
export const ADD_FRIENDS = "ADD_FRIENDS";

export function fetchUserList(query) {
	const request = axios({
		url: '/api/user/restaurants',
		method: 'get',
		responseType: 'json',
	});
	return {
		type: FETCH_USERLIST,
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