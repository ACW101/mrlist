import {FETCH_FRIENDLIST} from "../routes/profile/actions";

export default function(state = [], action) {
	switch(action.type) {
        case FETCH_FRIENDLIST: {
            console.log(action);
            return action.payload.data.result;
        }
		
	}
	return state;
}