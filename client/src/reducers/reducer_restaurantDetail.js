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
            // change half-star rating to _half string to match img name
            if (newState.rating % 1 > 0) {
                newState.rating = newState.rating.toString().charAt(0) + "_half";
                console.log(newState.rating);
            }
            return newState;
        }
	}
	return state;
}