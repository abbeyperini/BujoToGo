import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, generatePath } from 'react-router-dom';
import { eventActions } from '../store/actions/eventActions';
import AddBullet from './AddBullet';
import { formats } from '../utils/dateFormat';

function Monthly(props) {
    let deleted = props.deleted;
    let eventAdded = props.eventAdded;

    useEffect(() => {
        props.fetchMonthlyEvents()
    }, [deleted, eventAdded])

    if (!props.monthlyEvents || !props.monthlyEvents[0]) {
        let todayObj = formats.todayDate();
        return (
            <div className="main-block">
                <h1>{todayObj.month}</h1>
                <h2>Create a bullet!</h2>
                <AddBullet/>
            </div>
        )
    } else {
        let bullets = props.monthlyEvents.map(eventItem => {
            let start = formats.formatTime(eventItem.start);
            return(
                <li key={eventItem.id} className="event-bullet">
                    <NavLink to={generatePath("/events/edit-event/:id", {id: eventItem.id})}><h3>{eventItem.title}</h3></NavLink>
                    <p>{start}</p>
                    
                </li>
            )
        })
        let todayObj = formats.todayDate();
        return(
            <div className="main-block">
                <h1>{todayObj.month}</h1>
                <ul>
                    {bullets}
                </ul>
                <AddBullet/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        monthlyEvents: state.eventR.monthlyEvents,
        deleted: state.eventR.eventDeleted,
        eventAdded: state.eventR.eventAdded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMonthlyEvents: () => dispatch(eventActions.fetchMonthlyEvents()),
        deleteEvent: (id) => dispatch(eventActions.deleteEvent(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Monthly);