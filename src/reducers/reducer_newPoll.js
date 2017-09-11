import {CREATE_POLL} from "../routes/profile/actions";

export default function(state = null, action) {
	switch(action.type) {
		case CREATE_POLL: {
			console.log(action.payload);
            return action.payload;
        }
	}
	return state;
}