import React, { useState } from 'react';
import { connect } from 'react-redux';
import { eventActions } from '../store/actions/eventActions.js';
import { formats } from '../utils/dateFormat';


function AddBullet(props) {
    const [localEvent, setLocalEvent] = useState({});
    
    const handleOnChange = (e) => {
        setLocalEvent({
            ...localEvent,
            [e.target.name]: e.target.value
        })
    }

    const handleOnClick = (localEvent) => {
        let startString = formats.ISOstring(localEvent.startDate, localEvent.startTime)
        let endString = formats.ISOstring(localEvent.endDate, localEvent.endTime);

        let eventObj = {
            title: localEvent.title,
            start: startString,
            end: endString,
            allDay: localEvent.allDay
        }
        
        props.addEvent(eventObj)
    }

    return (
        <div>
            {props.error ? <h2>{props.error}</h2> : null}
            <div className="input-block">
                <label>Title</label>
                <input type="text" name="title" onChange={handleOnChange}></input>
                <label>Start Date</label>
                <input type="date" name="startDate" onChange={handleOnChange}></input>
                <label>Start Time</label>
                <input type="time" name="startTime" onChange={handleOnChange}></input>
                <label>End Date</label>
                <input type="date" name="endDate" onChange={handleOnChange}></input>
                <label>End Time</label>
                <input type="time" name="endTime" onChange={handleOnChange}></input>
                <label>All Day Event?</label>
                <input type="checkbox" name="allDay" value="true" onChange={handleOnChange}></input>
                <button onClick={() => handleOnClick(localEvent)}>Add</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEvent: (eventObj) => dispatch(eventActions.addEvent(eventObj))
    }
}

export default connect(null, mapDispatchToProps)(AddBullet);