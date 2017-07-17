import axios from "axios";

export const FETCH_USERLIST = "FETCH_USERLIST";

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