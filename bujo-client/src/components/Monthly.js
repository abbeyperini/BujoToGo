import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { eventActions } from '../store/actions/eventActions';
import AddBullet from './AddBullet';

function Monthly(props) {

    useEffect(() => {
        props.fetchEvents()
    }, [])

    if (!props.pets || !props.pets[0]) {
        return (
            <div className="main-block">
                <h1>Create a bullet!</h1>
                <AddBullet/>
            </div>
        )
    } else {
        let bullets = props.events.map(eventItem => {
            return(
                <li key={eventItem.id} className="event-bullet">
                    <h3>{eventItem.title}</h3>
                    <p>{eventItem.start}</p>
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
        events: state.eventR.events
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEvents: () => dispatch(eventActions.fetchEvents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Monthly);