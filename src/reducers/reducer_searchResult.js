import {FETCH_RESTAURANT_SUCCESS, ADD_RESTAURANT} from "../routes/profile/YelpDialog/actions";

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_RESTAURANT_SUCCESS: {
			console.log(action.payload)
			return _.mapKeys(action.payload.data.searchResult, 'id');
		}
			
			
		case ADD_RESTAURANT: {
			console.log(action.payload);
		}
	}
	return state;
}