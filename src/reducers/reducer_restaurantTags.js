import { 
    RESTAURANTTAG_IS_LOADING,
    RESTAURANTTAG_FETCH_SUCCESS
} from "../routes/profile/actions";

export function restaurantTagsReducer(state = {}, action) {
	switch(action.type) {
        case RESTAURANTTAG_IS_LOADING: {
            return Object.assign(state, action.payload)
        }
		case RESTAURANTTAG_FETCH_SUCCESS: {
            const newState = Object.assign({}, state);
            newState[action.id] = action.payload;
            console.log(newState);
			return newState;
		}
	}
	return state;
}