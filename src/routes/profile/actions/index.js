import axios from "axios";

export const FETCH_RESTAURANTLIST = "FETCH_RESTAURANTLIST";
export const FETCH_TAGLIST = "FETCH_TAGLIST";
export const SELECT_RESTAURANTS= "SELECT_RESTAURANTS";
export const SELECT_TAG = "SELECT_TAG";
export const FETCH_FRIENDLIST = "FETCH_FRIENDLIST";
export const ADD_FRIENDS = "ADD_FRIENDS";
export const RESTAURANTLIST_IS_LOADING = 'RESTAURANTLIST_IS_LOADING';
export const RESTAURANTLIST_FETCH_SUCCESS = 'RESTAURANTLIST_FETCH_SUCCESS';


export function fetchRestaurantList(selectedTag) {
	return (dispatch) => {
		dispatch(restaurantListIsLoading(true));

		axios({
			url: '/api/user/restaurants',
			method: 'get',
			responseType: 'json',
		}).then(response => {
			console.log(response);
			dispatch(restaurantListIsLoading(false));
			const restaurantList = response.data.result;
			dispatch(restaurantListFetchSuccess(response.data.result));
		})
	}
	// return {
	// 	type: FETCH_RESTAURANTLIST,
	// 	payload: request,
	// };
}

export function restaurantListIsLoading(bool){
    return {
        type: RESTAURANTLIST_IS_LOADING,
        payload: bool,
    }
}

export function restaurantListFetchSuccess(restaurantList) {
	return {
		type: RESTAURANTLIST_FETCH_SUCCESS,
		payload: restaurantList
	}
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

export function selectTag(selectedTag) {
	return {
		type: SELECT_TAG,
		payload: selectedTag
	}
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