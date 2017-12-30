import {FETCH_FRIENDLIST, ADD_FRIENDS} from "../routes/profile/actions";

export default function(state = [], action) {
	switch(action.type) {
        case FETCH_FRIENDLIST:
            console.log(action.payload.data.result)
            return action.payload.data.result;
		case ADD_FRIENDS: {
            console.log(action.payload)
            return action.payload;
        }
	}
	return state;
}