import {FETCH_USERLIST} from "../routes/profile/actions";

export default function(state = {}, action) {
	switch(action.type) {
        case FETCH_USERLIST:
			return _.mapKeys(action.payload.data.result.restaurants, 'id');
	}
	return state;
}