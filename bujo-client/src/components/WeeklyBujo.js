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

function Weekly(props) {
    let deleted = props.deleted;
    let eventAdded = props.eventAdded;

    useEffect(() => {
        props.fetchWeeklyEvents()
    }, [deleted, eventAdded])

    if (!props.weeklyEvents || !props.weeklyEvents[0]) {
        let todayObj = formats.todayDate();
        return (
            <div className="main-block">
                <h1>{todayObj.month} - Week {todayObj.weekNum}</h1>
                <h2>Create a bullet!</h2>
                <AddBullet/>
            </div>
        )
    } else {
        let bullets = props.weeklyEvents.map(eventItem => {
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
                <h1>{todayObj.month} - Week {todayObj.weekNum}</h1>
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
        weeklyEvents: state.eventR.weeklyEvents,
        deleted: state.eventR.eventDeleted,
        eventAdded: state.eventR.eventAdded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeeklyEvents: () => dispatch(eventActions.fetchWeeklyEvents()),
        deleteEvent: (id) => dispatch(eventActions.deleteEvent(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weekly);