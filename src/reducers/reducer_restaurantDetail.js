import { RESTAURANT_DETAIL_FETCH_SUCCESS } from "../routes/profile/actions";

const initialState = {
    isOpenNow: null,
    hours: [],
    display_phone: "",
    location: {},
    photos: [],
    price: "",
    rating: null,
}

export default function(state = {}, action) {
	switch(action.type) {
		case RESTAURANT_DETAIL_FETCH_SUCCESS: {
            // assign a new state
            const newState = Object.assign({}, action.payload.data.jsonBody);
            return newState;
        }
	}
	return state;
}