import {FETCH_RESTAURANTLIST} from "../routes/profile/actions";

export default function(state = [], action) {
	switch(action.type) {
        case FETCH_RESTAURANTLIST:
		return action.payload.data.result;
	}
	return state;
}