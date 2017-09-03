import {
	RESTAURANTLIST_IS_LOADING, 
	RESTAURANTLIST_FETCH_SUCCESS
} from "../routes/profile/actions";

export function restaurantListIsLoadingReducer(state = false, action) {
	switch(action.type) {
        case RESTAURANTLIST_IS_LOADING: {
			return action.payload;
		}
	}
	return state;
}

export function restaurantListReducer(state = {}, action) {
	switch(action.type) {
		case RESTAURANTLIST_FETCH_SUCCESS: {
			return _.keyBy(action.payload, 'id');
		}
	}
	return state;
}