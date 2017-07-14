import {FETCH_RESTAURANT} from "../actions/index";
import _ from "lodash";


export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_RESTAURANT:
		 	return _.mapKeys(action.payload.data.searchResult, 'id')
	}
	return state;
}