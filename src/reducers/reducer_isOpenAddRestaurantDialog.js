import {TOGGLE_ADDDIALOG} from "../routes/profile/actions";

export default function(state = false, action) {
	switch(action.type) {
		case TOGGLE_ADDDIALOG:
			console.log(state)
			return state ? false : true;
	}
	return state;
}