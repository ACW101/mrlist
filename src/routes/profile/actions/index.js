import axios from "axios";

export const FETCH_RESTAURANTLIST = "FETCH_RESTAURANTLIST";
export const FETCH_TAGLIST = "FETCH_TAGLIST";
export const SELECT_RESTAURANT= "SELECT_RESTAURANT";
export const SELECT_TAG = "SELECT_TAG";
export const FETCH_FRIENDLIST = "FETCH_FRIENDLIST";
export const ADD_FRIENDS = "ADD_FRIENDS";
export const RESTAURANTLIST_IS_LOADING = 'RESTAURANTLIST_IS_LOADING';
export const RESTAURANTLIST_FETCH_SUCCESS = 'RESTAURANTLIST_FETCH_SUCCESS';
export const FETCH_RESTAURANT_TAGS = 'FETCH_RESTAURANT_TAGS';
export const RESTAURANTTAG_IS_LOADING = 'RESTAURANTTAG_IS_LOADING';
export const RESTAURANTTAG_FETCH_SUCCESS = 'RESTAURANTTAG_FETCH_SUCCESS';
export const TOGGLE_TAGTEXTFIELD = 'TOGGLE_TAGTEXTFIELD';


export function fetchRestaurantList(selectedTag) {
	return (dispatch) => {
		dispatch(restaurantListIsLoading(true));

		axios({
			url: '/api/user/restaurants',
			method: 'get',
			responseType: 'json',
		}).then(response => {
			dispatch(restaurantListIsLoading(false));
			const restaurantList = response.data.result;
			dispatch(restaurantListFetchSuccess(response.data.result));
			restaurantList.map(restaurant => {
				dispatch(fetchRestaurantTags(restaurant.id));
			})
		})
	}

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

export function fetchRestaurantTags(restaurant_id) {
	return (dispatch) => {
		dispatch(restaurantTagIsLoading(restaurant_id, true));
		const request = axios({
			url: `/api/user/restaurants/${restaurant_id}/tags`,
			method: 'get',
			responseType: 'json',
		}).then(response => {
			dispatch(restaurantTagIsLoading(restaurant_id, false));
			dispatch(restaurantTagFetchSuccess(restaurant_id, response.data.response));
		})
	}
}

export function restaurantTagIsLoading(restaurant_id, bool) {
	return {
		type: RESTAURANTTAG_IS_LOADING,
		payload: { [restaurant_id]: bool },
	}
}
export function restaurantTagFetchSuccess(restaurant_id, tags) {
	return {
		type: RESTAURANTTAG_FETCH_SUCCESS,
		id: restaurant_id,
		payload: tags,
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

export function selectRestaurant(selectedRestaurant_id) {
		return {
		type: SELECT_RESTAURANT,
		payload: selectedRestaurant_id
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

export function toggleTagTextfield() {
	return {
		type: TOGGLE_TAGTEXTFIELD,
		payload: null
	}
}

export function addTag(params) {
	return (dispatch) => {
		const {restaurant_id, name} = params;
		const createTagRequest = axios({
			url: 'api/user/tags',
			method: 'post',
			data: {name},
			responseType: 'json'
		}).then(response => {
			const newTagId = response.data.response;
			if(newTagId != null) {
				dispatch(fetchTagList());
				const addTagToRestaurantRequest = axios({
					url: `api/user/restaurants/${restaurant_id}/tags/${newTagId}`,
					method: 'put',
					responseType: 'json',
				}).then(response => {
					dispatch(fetchRestaurantTags(restaurant_id));
				})
				
			}

		}) 

	}
}

export function removeTag(params) {
	const {restaurant_id, tag_id} = params;
	return (dispatch) => {
		const detachTagRequest = axios({
			url: `api/user/restaurants/${restaurant_id}/tags/${tag_id}`,
			method: 'delete',
			responseType: 'json',
		}).then(response => {
			dispatch(fetchRestaurantTags(restaurant_id));
			dispatch(checkOrphanTag(tag_id))
		})
	}
}

export function checkOrphanTag(tag_id) {
	return(dispatch) => {
		const createTagRequest = axios({
			url: `api/user/tags/${tag_id}/restaurants`,
			method: 'get',
			responseType: 'json',
		}).then(response => {
			if(response.data.response.length == 0) {
				dispatch(deleteOrphanTag(tag_id));
			}
		})
	}
}

export function deleteOrphanTag(tag_id) {
	return(dispatch) => {
		const deleteOrphanTag = axios({
			url: `api/user/tags/${tag_id}`,
			method: 'delete',
			responseType: 'json',
		}).then(response => {
			dispatch(fetchTagList());
		})
	}
}