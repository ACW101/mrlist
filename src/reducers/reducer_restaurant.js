import {FETCH_RESTAURANT} from "../actions/index";


export default function(state = [], action) {
	switch(action.type) {
		case FETCH_RESTAURANT:
			return action.payload.data.searchResult;
	}
	return state;
}