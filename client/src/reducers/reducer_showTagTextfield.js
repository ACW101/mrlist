import {TOGGLE_TAGTEXTFIELD} from "../routes/profile/Details/actions";

export default function(state = false, action) {
	switch(action.type) {
        case TOGGLE_TAGTEXTFIELD: 
            return !state;
    }
	return state;
}