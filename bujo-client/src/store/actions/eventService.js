import axios from 'axios';

export const eventService = {
    addEvent,
    fetchEvents,
    deleteEvent,
    fetchSingleEvent,
    editEvent,
    fetchMonthlyEvents,
    fetchDailyEvents
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

function deleteEvent(id) {
    return axios.delete(`http://localhost:8080/events/delete-event/${id}`)
}

function fetchSingleEvent(id) {
    return axios.get(`http://localhost:8080/events/fetch-single/${id}`)
}

function editEvent(localEvent) {
    return axios.post('http://localhost:8080/events/edit-event', {
        id: localEvent.id,
        title: localEvent.title,
        start: localEvent.start, 
        end: localEvent.end,
        allDay: localEvent.allDay
    })
}

function fetchMonthlyEvents() {
    return axios.get('http://localhost:8080/events/monthly-events')
}

function fetchDailyEvents() {
    return axios.get('http://localhost:8080/events/daily-events')
}