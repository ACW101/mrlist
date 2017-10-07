import { 
    RESTAURANTTAG_IS_LOADING,
    RESTAURANTTAG_FETCH_SUCCESS
} from "../routes/profile/Details/actions";

export function restaurantTagsReducer(state = {}, action) {
	switch(action.type) {
        case RESTAURANTTAG_IS_LOADING: {
            return Object.assign(state, action.payload)
        }
		case RESTAURANTTAG_FETCH_SUCCESS: {
            const newState = Object.assign({}, state);
            const tagAsKey = {};
            action.payload.map(tagObj => {
                tagAsKey[tagObj.id] = tagObj.name;
                return tagObj;
            })
            newState[action.id] = tagAsKey;
			return newState;
		}
	}
	return state;
}