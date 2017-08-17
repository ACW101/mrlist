import {SELECT_RESTAURANT} from "../routes/profile/actions";

export default function(state = null, action) {
	switch(action.type) {
        case SELECT_RESTAURANT: 
            return action.payload;
    }
	return state;
}