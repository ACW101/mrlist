import { TOGGLE_IMPORT_CHECKBOX, IMPORT_RESULT_RECEIVED, CLEAR_IMPORT_RESULT } from "../../actions/RestaurantListAction";

export default function(state = [], action) {
	switch(action.type) {
		case IMPORT_RESULT_RECEIVED:
            return new Array(action.payload.length).fill(true);
        case CLEAR_IMPORT_RESULT:
            return []
        case TOGGLE_IMPORT_CHECKBOX:
            let newState = state.slice();
            const idxToChange = action.payload;
            newState[idxToChange] = !newState[idxToChange]
            return newState;
        default: 
            return state;
	}
}