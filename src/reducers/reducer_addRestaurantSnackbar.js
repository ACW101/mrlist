import {FIRE_ADDRESTAURANT_SNACKBAR, HIDE_ADDRESTAURANT_SNACKBAR} from "../routes/profile/YelpDialog/actions";

export default function(state = false, action) {
	switch(action.type) {
        case FIRE_ADDRESTAURANT_SNACKBAR:
            return action.payload;
        case HIDE_ADDRESTAURANT_SNACKBAR:
            return action.payload;
	}
	return state;
}