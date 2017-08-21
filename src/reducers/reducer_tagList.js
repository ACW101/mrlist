import {FETCH_TAGLIST} from "../routes/profile/actions";

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_TAGLIST:
		return action.payload.data.result;
	}
	return state;
}