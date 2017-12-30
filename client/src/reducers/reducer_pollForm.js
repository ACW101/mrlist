import { POLLFORM_CHANGE } from "../routes/profile/actions";

const initialState = {
    selected: [],
    eventName: "",
    eventDate: ""
}

export default function(state = initialState, action) {
	switch(action.type) {
		case POLLFORM_CHANGE: {
            // assign modified state to original object
            const clone = Object.assign(initialState, state, action.payload);
            return clone;
        }
	}
	return state;
}