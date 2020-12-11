import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, generatePath } from 'react-router-dom';
import { eventActions } from '../store/actions/eventActions';
import AddBullet from './AddBullet';

function Monthly(props) {
    let deleted = props.deleted;
    let eventAdded = props.eventAdded;

    useEffect(() => {
        props.fetchEvents()
    }, [deleted, eventAdded])

    if (!props.events || !props.events[0]) {
        return (
            <div className="main-block">
                <h1>Monthly</h1>
                <h2>Create a bullet!</h2>
                <AddBullet/>
            </div>
        )
    } else {
        let bullets = props.events.map(eventItem => {
            return(
                <li key={eventItem.id} className="event-bullet">
                    <h3>{eventItem.title}</h3>
                    <p>{eventItem.start}</p>
                    <NavLink to={generatePath("/events/edit-event/:id", {id: eventItem.id})}><button>Edit</button></NavLink>
                    <button onClick={() => {props.deleteEvent(eventItem.id)}}>Delete</button>
                </li>
            )
        })

        return(
            <div className="main-block">
                <h1>Monthly</h1>
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
        events: state.eventR.events,
        deleted: state.eventR.eventDeleted,
        eventAdded: state.eventR.eventAdded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEvents: () => dispatch(eventActions.fetchEvents()),
        deleteEvent: (id) => dispatch(eventActions.deleteEvent(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Monthly);