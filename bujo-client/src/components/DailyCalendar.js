import React from 'react';
import { connect } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { generatePath } from 'react-router-dom';
import { eventActions } from '../store/actions/eventActions';

const DailyCalendar = (props) => (
    <div className="calendar">
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridDay"
            events={props.events}
            eventClick={(eventClickInfo) => {props.history.push(generatePath("/events/edit-event/:id", {id: eventClickInfo.event._def.publicId}))}}
        />
    </div>
)

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

export default connect(mapStateToProps, mapDispatchToProps)(DailyCalendar);