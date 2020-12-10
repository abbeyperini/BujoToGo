import { eventConstants } from './eventActionTypes';
import { eventService } from './eventService';

export const eventActions = {
    addEvent,
    fetchEvents
}

function addEvent(eventObj) {
    return dispatch => {
        eventService.addEvent(eventObj)
        .then(
            result => {
                if (result.data.eventAdded) {
                    dispatch(success());
                } else if (!result.data.eventAdded) {
                    let error = "Something went wrong - event not added."
                    dispatch(failure(error))
                }
            },
            error => {
                dispatch(failure(error))
            }
        )
    }

    function success() { return { type: eventConstants.EVENT_ADDED } }
    function failure(error) { return { type: eventConstants.EVENT_ADD_FAIL, payload: error } }
}

function fetchEvents() {
    return dispatch => {
        eventService.fetchEvents()
        .then(
            result => {
                console.log(result)
                if (result.data.events) {
                    dispatch(success(result.data));
                } else if (!result.data.events) {
                    let error = "Something went wrong - events not loaded."
                    dispatch(failure(error))
                }
            },
            error => {
                dispatch(failure(error))
            }
        )
    }

    function success(result) { return { type: eventConstants.EVENTS_FETCHED, payload: result } }
    function failure(error) { return { type: eventConstants.EVENT_FETCH_FAIL, payload: error } }
}