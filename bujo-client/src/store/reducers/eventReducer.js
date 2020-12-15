import { eventConstants } from '../actions/eventActionTypes';
import { userConstants } from '../actions/userActionTypes';

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
        case eventConstants.SINGLE_EVENT_REQUEST:
            return {
                ...state,
                singleLoading: true
            }
        case eventConstants.SINGLE_EVENT_FETCHED:
            return {
                ...state,
                singleLoading: false,
                singleEvent: action.payload
            }
        case eventConstants.SINGLE_EVENT_FETCH_FAIL:
            return {
                ...state,
                singleLoading: false,
                singleEventFetched: false,
                error: action.payload
            }
        case eventConstants.MONTHLY_EVENTS_FETCHED:
            return {
                ...state,
                monthlyEvents: action.payload
            }
        case eventConstants.MONTHLY_EVENTS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case eventConstants.WEEKLY_EVENTS_FETCHED:
            return {
                ...state,
                weeklyEvents: action.payload
            }
        case eventConstants.WEEKLY_EVENTS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case eventConstants.DAILY_EVENTS_FETCHED:
            return {
                ...state,
                dailyEvents: action.payload
            }
        case eventConstants.DAILY_EVENTS_FAIL:
            return {
                state,
                error: action.payload
            }
        case eventConstants.EVENT_EDITED:
            return {
                state,
                eventEdited: true
            }
        case eventConstants.EVENT_EDIT_FAIL:
            return {
                state,
                eventEdited: false,
                error: action.payload
            }
        case userConstants.LOGOUT:
            return {
                initialState
            }
        default:
            return state
    }
}

export default reducer;