import axios from "axios";
export const FETCH_RESTAURANTLIST = "FETCH_RESTAURANTLIST";

function getAxiosInstance(token) {
    if (token !== null) {
        return axios.create({
            baseURL: '/api',
            headers: { Authorization: "Bearer " + token }
        })
    }
    return null
}

export function fetchRestaurantList(selectedTag) {
	return (dispatch, getState) => {
		dispatch(restaurantListIsLoading(true));
		const instance = getAxiosInstance(getState().token);
		instance.get('user/restaurants')
			.then(response => {
				dispatch(restaurantListIsLoading(false));
				const restaurantList = response.data.result;
				dispatch(restaurantListFetchSuccess(response.data.result));
			})
	}

}

export const RESTAURANTLIST_IS_LOADING = 'RESTAURANTLIST_IS_LOADING';
export function restaurantListIsLoading(bool){
    return {
        type: RESTAURANTLIST_IS_LOADING,
        payload: bool,
    }
}

export const RESTAURANTLIST_FETCH_SUCCESS = 'RESTAURANTLIST_FETCH_SUCCESS';
export function restaurantListFetchSuccess(restaurantList) {
    console.log(restaurantList)
	return {
		type: RESTAURANTLIST_FETCH_SUCCESS,
		payload: restaurantList
	}
}

export const SELECT_RESTAURANT= "SELECT_RESTAURANT";

export function selectRestaurant(selectedRestaurant_id) {
	return ((dispatch, getState) => {
		// dispatch selectedRestaurant
		dispatch({
			type: SELECT_RESTAURANT,
			payload: selectedRestaurant_id
		})
		// start fetching restaurantDetails
		const {restaurantList} = getState();
		const {yelp_id} = restaurantList[selectedRestaurant_id];
	})
}

export const LOADING_IMPORT_FROM_YELP = "LOADING_IMPORT_FROM_YELP";
export const INVALID_IMPORT_URL = "INVALID_IMPORT_URL";
export const IMPORT_RESULT_RECEIVED = "IMPORT_RESULT_RECEIVED";
export function importFromYelp(bookmarkPageURL) {
	return (dispatch, getState) => {
		if (bookmarkPageURL.slice(0, 51) !== "https://www.yelp.com/user_details_bookmarks?userid=") {
			dispatch({type: INVALID_IMPORT_URL})
		} else {
			const yelp_id = bookmarkPageURL.slice(51);
			const instance = getAxiosInstance(getState().token);
			instance.get('yelp/bookmark?yelp_id=' + yelp_id)
			.then(res => {
				if (res.data.length > 0) {
					dispatch({
						type: IMPORT_RESULT_RECEIVED, 
						payload: res.data
					})
				}
			})
		}
		return {type: LOADING_IMPORT_FROM_YELP, payload: bookmarkPageURL};
	}
	
}

export const CLEAR_IMPORT_RESULT = "CLEAR_IMPORT_RESULT";
export function clearImportResult() {
	return {
		type: CLEAR_IMPORT_RESULT
	}
}

export const OPEN_IMPORT_DIALOG = "OPEN_IMPORT_DIALOG";
export function openImportDialog() {
	return {
		type: OPEN_IMPORT_DIALOG,
	}
}

export const CLOSE_IMPORT_DIALOG = "CLOSE_IMPORT_DIALOG";
export function closeImportDialog() {
	return {
		type: CLOSE_IMPORT_DIALOG
	}
}

export const TOGGLE_IMPORT_CHECKBOX = "TOGGLE_IMPORT_CHECKBOX";
export function toggleImportCheckbox(i) {
	return {
		type: TOGGLE_IMPORT_CHECKBOX,
		payload: i
	}
}