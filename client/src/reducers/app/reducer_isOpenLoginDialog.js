import {TOGGLE_LOGINDIALOG} from "../../actions/AppAction";

export default function(state = false, action) {
	switch(action.type) {
        case TOGGLE_LOGINDIALOG:
            return state ? false : true;
	}
	return state;
}