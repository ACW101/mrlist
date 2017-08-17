import {SELECT_TAG} from "../routes/profile/actions";

export default function(state = null, action) {
	switch(action.type) {
        case SELECT_TAG: {
            const selectedTag = action.payload;
            if(selectedTag == state) return null;
            else return selectedTag;
        }
    }
	return state;
}