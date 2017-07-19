import {SELECT_RESTAURANTS} from "../routes/profile/actions";

export default function(state = [], action) {
	switch(action.type) {
        case SELECT_RESTAURANTS: 
            return action.payload;
    }
	return state;
}