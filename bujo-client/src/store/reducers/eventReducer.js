import { eventConstants } from '../actions/eventActionTypes';

const reducer = (state = {}, action) => {
    
    switch(action.type) {
        case eventConstants.EVENTS_FETCHED:
            return {
                ...state,
                events: action.payload
            }
        case eventConstants.EVENT_FETCH_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case eventConstants.EVENT_ADDED:
            return {
                ...state,
                eventAdded: true
            }
        case eventConstants.EVENT_ADD_FAIL:
            return {
                ...state,
                eventAdded: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer;