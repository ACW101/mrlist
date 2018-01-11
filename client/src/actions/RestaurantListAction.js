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

