import {TOGGLE_ADDDIALOG} from "../routes/profile/actions";

export default function(state = false, action) {
	switch(action.type) {
		case TOGGLE_ADDDIALOG:
			return action.payload;
	}
	return state;
}