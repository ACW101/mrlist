import { OPEN_LOGINDIALOG, CLOSE_LOGINDIALOG, SIGN_IN_SUCCESS } from "../../actions/AppAction";

export default function(state = false, action) {
	switch(action.type) {
        case OPEN_LOGINDIALOG:
			return true;
		case CLOSE_LOGINDIALOG:
			return false;
		case SIGN_IN_SUCCESS:
			return false;
		default:
			return state;
	}
}