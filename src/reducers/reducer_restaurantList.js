import {
	RESTAURANTLIST_IS_LOADING, 
	RESTAURANTLIST_FETCH_SUCCESS
} from "../routes/profile/actions";

export function restaurantListIsLoading(state = false, action) {
	switch(action.type) {
        case RESTAURANTLIST_IS_LOADING: {
			return action.payload;
		}
	}
	return state;
}

export function restaurantList(state = [], action) {
	switch(action.type) {
		case RESTAURANTLIST_FETCH_SUCCESS: {
			return action.payload;
		}
	}
	return state;
}