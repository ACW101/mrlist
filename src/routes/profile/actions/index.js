import axios from "axios";

export const FETCH_USERLIST = "FETCH_USERLIST";
export const SELECT_RESTAURANTS= "SELECT_RESTAURANTS";

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