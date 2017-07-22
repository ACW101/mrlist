import {FETCH_RESTAURANT} from "../routes/yelp/actions/index";
import {ADD_RESTAURANT} from "../routes/yelp/actions/index";

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_RESTAURANT:
			return _.mapKeys(action.payload.data.searchResult, 'id');
		case ADD_RESTAURANT: {
			console.log(action.payload);
		}
	}
	return state;
}