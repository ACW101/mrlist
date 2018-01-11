import { IS_SIGNED_IN, NOT_SIGNED_IN } from '../../actions/AppAction'

export default function(state = null, action) {
    switch (action.type) {
        case IS_SIGNED_IN:
            return action.payload;
        case NOT_SIGNED_IN:
            return null;
        default:
            return state;
    }
}