// import {LOGOUT} from "../routes/home/actions";
import {LOGIN} from "../routes/profile/actions"; 

export default function(state = false, action) {
	switch(action.type) {
        // case LOGOUT:
        //     console.log("logout")
        //     return false;
        case LOGIN:
            console.log("login")
            return true;
	}
	return state;
}