import axios from 'axios';

export const eventService = {
    addEvent,
    fetchEvents
}

function addEvent(eventObj) {

    return axios.post('http://localhost:8080/events/new-event', {
        title: eventObj.title,
        start: eventObj.start, 
        end: eventObj.end,
        allDay: eventObj.allDay
    })
}

function fetchEvents() {

    return axios.get('http://localhost:8080/events/fetch-all')
}