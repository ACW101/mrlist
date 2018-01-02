import {TOGGLE_MENU} from "../../actions/AppAction";

export default function(state = false, action) {
	switch(action.type) {
        case TOGGLE_MENU:
            return state ? false : true;
	}
	return state;
}