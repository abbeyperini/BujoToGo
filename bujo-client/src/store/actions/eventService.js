import axios from 'axios';

export const eventService = {
    addEvent,
    fetchEvents,
    deleteEvent,
    fetchSingleEvent,
    editEvent,
    fetchMonthlyEvents,
    fetchWeeklyEvents,
    fetchDailyEvents
}

function addEvent(eventObj) {

    return axios.post('https://bujo-to-go.herokuapp.com/events/new-event', {
        icon: eventObj.icon,
        title: eventObj.title,
        start: eventObj.start, 
        end: eventObj.end,
        allDay: eventObj.allDay
    })
}

function fetchEvents() {

    return axios.get('https://bujo-to-go.herokuapp.com/events/fetch-all')
}

function deleteEvent(id) {
    return axios.delete(`https://bujo-to-go.herokuapp.com/events/delete-event/${id}`)
}

function fetchSingleEvent(id) {
    return axios.get(`https://bujo-to-go.herokuapp.com/events/fetch-single/${id}`)
}

function editEvent(localEvent) {
    return axios.post('https://bujo-to-go.herokuapp.com/events/edit-event', {
        id: localEvent.id,
        icon: localEvent.icon,
        title: localEvent.title,
        start: localEvent.start, 
        end: localEvent.end,
        allDay: localEvent.allDay
    })
}

function fetchMonthlyEvents() {
    return axios.get('https://bujo-to-go.herokuapp.com/events/monthly-events')
}

function fetchWeeklyEvents() {
    return axios.get('https://bujo-to-go.herokuapp.com/events/weekly-events')
}

function fetchDailyEvents() {
    return axios.get('https://bujo-to-go.herokuapp.com/events/daily-events')
}