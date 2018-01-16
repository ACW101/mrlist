import {OPEN_IMPORT_DIALOG, CLOSE_IMPORT_DIALOG} from "../../actions/RestaurantListAction";

export default function(state = false, action) {
	switch(action.type) {
		case OPEN_IMPORT_DIALOG:
            return true;
        case CLOSE_IMPORT_DIALOG:
            return false;
        default: 
            return state;
	}
}