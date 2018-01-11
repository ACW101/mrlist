import { IS_SIGNED_IN, NOT_SIGNED_IN} from "../../actions/AppAction";

export default function(state = false, action) {
	switch(action.type) {
        case IS_SIGNED_IN:
			return true;
		case NOT_SIGNED_IN:
			return false;
		default:
			return state;
	}
}