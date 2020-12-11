import { eventConstants } from '../actions/eventActionTypes';

const initialState = {events: []}

const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case eventConstants.EVENTS_FETCHED:
            return {
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
        case eventConstants.EVENT_DELETED:
            return {
                ...state,
                eventDeleted: true,
            }
        case eventConstants.EVENT_DELETE_FAIL:
            return {
                ...state,
                eventDeleted: false,
                error: action.payload
            }
        case eventConstants.SINGLE_EVENT_FETCHED:
            return {
                ...state,
                singleEvent: action.payload
            }
        case eventConstants.SINGLE_EVENT_FETCH_FAIL:
            return {
                ...state,
                singleEventFetched: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer;