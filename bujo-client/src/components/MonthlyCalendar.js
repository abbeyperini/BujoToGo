import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, generatePath } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import AddBullet from './AddBullet';
import { eventActions } from '../store/actions/eventActions';

function MonthlyCalendar(props) {

    useEffect(() => {
        props.fetchEvents()
    }, [])

    return (
        <div className="main-block">
            <div className="calendar-container">
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                events={props.events}
                eventClick={(eventClickInfo) => {props.history.push(generatePath("/events/edit-event/:id", {id: eventClickInfo.event._def.publicId}))}}
            />
            </div>
            <AddBullet/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        events: state.eventR.events
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEvents: () => dispatch(eventActions.fetchEvents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyCalendar);