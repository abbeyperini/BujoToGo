import { eventConstants } from './eventActionTypes';
import { eventService } from './eventService';

export const eventActions = {
    addEvent,
    fetchEvents,
    deleteEvent,
    fetchSingleEvent,
    editEvent
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
                if (result.data.events) {
                    dispatch(success(result.data.events));
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

function deleteEvent(id) {
    return dispatch => {
        eventService.deleteEvent(id)
        .then(
            result => {
                console.log(result)
                dispatch(success(result.data));
            },
            error => {
                dispatch(failure(error))
            }
        )
    }

    function success(result) { return { type: eventConstants.EVENT_DELETED, payload: result } }
    function failure(error) { return { type: eventConstants.EVENT_DELETE_FAIL, payload: error } }
}

function fetchSingleEvent(id) {
    return dispatch => {
        eventService.fetchSingleEvent(id)
        .then(
            result => {
                dispatch(success(result.data.events));
            },
            error => {
                dispatch(failure(error))
            }
        )
    }

    function success(result) { return { type: eventConstants.SINGLE_EVENT_FETCHED, payload: result } }
    function failure(error) { return { type: eventConstants.SINGLE_EVENT_FETCH_FAIL, payload: error } }
}

function editEvent(localEvent) {
    return dispatch => {
        eventService.editEvent(localEvent)
        .then(
           result => {
               console.log(result)
               dispatch(success(result.data));
           },
           error => {
               dispatch(failure(error))
           }
        )
    }

    function success(result) { return { type: eventConstants.EVENT_EDITED, payload: result } }
    function failure(error) { return { type: eventConstants.EVENT_EDIT_FAIL, payload: error } }
}