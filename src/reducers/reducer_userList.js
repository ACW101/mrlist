import {FETCH_USERLIST} from "../routes/profile/actions";

export default function(state = [], action) {
	switch(action.type) {
        case FETCH_USERLIST:
		return action.payload.data.result.restaurants;
	}
	return state;
}