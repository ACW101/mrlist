import {TOGGLE_SENDDIALOG} from "../routes/profile/actions";

export default function(state = false, action) {
	switch(action.type) {
		case TOGGLE_SENDDIALOG:
			console.log(action.type);
            return state ? false : true;
	}
	return state;
}