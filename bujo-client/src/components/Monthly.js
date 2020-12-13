import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, generatePath } from 'react-router-dom';
import { eventActions } from '../store/actions/eventActions';
import AddBullet from './AddBullet';
import { formats } from '../utils/dateFormat';
import { ReactComponent as Task } from '../images/basicIcons/bullet.svg';
import { ReactComponent as Note } from '../images/basicIcons/dash.svg';
import { ReactComponent as Event } from '../images/basicIcons/o.svg';
import { ReactComponent as Completed } from '../images/basicIcons/x.svg';
import { ReactComponent as MigrateF } from '../images/basicIcons/arrowR.svg';
import { ReactComponent as MigrateB } from '../images/basicIcons/arrowL.svg';

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
            switch(eventItem.icon) {
                case "task":
                    return(
                        <li key={eventItem.id} className="event-bullet">
                        <Task />
                        <NavLink to={generatePath("/events/edit-event/:id", {id: eventItem.id})}><h3>{eventItem.title}</h3></NavLink>
                        <p>{start}</p>
                        </li>
                    )
                case "event":
                    return(
                        <li key={eventItem.id} className="event-bullet">
                        <Event />
                        <NavLink to={generatePath("/events/edit-event/:id", {id: eventItem.id})}><h3>{eventItem.title}</h3></NavLink>
                        <p>{start}</p>
                        </li>
                    )
                case "completed":
                    return(
                        <li key={eventItem.id} className="event-bullet">
                        <Completed />
                        <NavLink to={generatePath("/events/edit-event/:id", {id: eventItem.id})}><h3>{eventItem.title}</h3></NavLink>
                        <p>{start}</p>
                        </li>
                    )
                case "migrateF":
                    return(
                        <li key={eventItem.id} className="event-bullet">
                        <MigrateF />
                        <NavLink to={generatePath("/events/edit-event/:id", {id: eventItem.id})}><h3>{eventItem.title}</h3></NavLink>
                        <p>{start}</p>
                        </li>
                    )
                case "migrateB":
                    return(
                        <li key={eventItem.id} className="event-bullet">
                        <MigrateB />
                        <NavLink to={generatePath("/events/edit-event/:id", {id: eventItem.id})}><h3>{eventItem.title}</h3></NavLink>
                        <p>{start}</p>
                        </li>
                    )
                case "note":
                    return(
                        <li key={eventItem.id} className="event-bullet">
                        <Note />
                        <NavLink to={generatePath("/events/edit-event/:id", {id: eventItem.id})}><h3>{eventItem.title}</h3></NavLink>
                        <p>{start}</p>
                        </li>
                    )
                default:
                    break
            }
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