import {SELECT_TAG} from "../routes/profile/actions";

export default function(state = null, action) {
	switch(action.type) {
        case SELECT_TAG: 
            return action.payload;
    }
	return state;
}