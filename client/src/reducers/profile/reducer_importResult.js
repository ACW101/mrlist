import { IMPORT_RESULT_RECEIVED, CLEAR_IMPORT_RESULT } from "../../actions/RestaurantListAction";

export default function(state = [], action) {
	switch(action.type) {
		case IMPORT_RESULT_RECEIVED:
            return action.payload;
        case CLEAR_IMPORT_RESULT:
            return [];
        default: 
            return state;
	}
}