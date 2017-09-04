import {FETCH_TAGLIST, SELECT_TAG} from "../routes/profile/actions";

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_TAGLIST: {
			const tagListKeyById = _.keyBy(action.payload.data.result, 'id');
			return tagListKeyById;
		}
		case SELECT_TAG: {
			console.log('select')
			const selectedTag = action.payload;
			const clone = Object.assign({}, state);
			if (clone[selectedTag].selected == null || 
				clone[selectedTag].selected == false) {
                clone[selectedTag].selected = true;
            } else {
                clone[selectedTag].selected = false;
			}
			console.log(clone);
            return clone;
		}
	}
	return state;
}