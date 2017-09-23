import {CREATE_POLL, POLLID_RECEIVED, NEWPOLL_REJECTED } from "../routes/profile/actions";

export default function(state = null, action) {
	switch(action.type) {
		case POLLID_RECEIVED: {
			return action.payload;
		}
		case NEWPOLL_REJECTED: {
			console.log('rejected');
		}
	}
	return state;
}