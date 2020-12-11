import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { eventActions } from '../store/actions/eventActions';
import { formats } from '../utils/dateFormat';

function EditEvent(props) {
    const [localEvent, setLocalEvent] = useState('');
    const [edited, setEdited] = useState(false);

    let id = props.match.params.id;

    const fetchEvent = (id) => {
        props.fetchSingleEvent(id)
    }

    const initialEvent = () => {
        let startObj = formats.fromISOstring(props.singleEvent.start)
        let endObj = formats.fromISOstring(props.singleEvent.end);

        if (props.singleEvent.all_day) {
            setLocalEvent({
                title: props.singleEvent.title,
                startDate: startObj.date,
                startTime: startObj.time,
                endDate: endObj.date,
                endTime: endObj.time,
                allDay: props.singleEvent.all_day,
                checkbox: <input type="checkbox" name="allDay" value="true" checked onChange={handleOnChange}></input>
            })
        } else {
            setLocalEvent({
                title: props.singleEvent.title,
                startDate: startObj.date,
                startTime: startObj.time,
                endDate: endObj.date,
                endTime: endObj.time,
                allDay: props.singleEvent.all_day,
                checkbox: <input type="checkbox" name="allDay" value="true" onChange={handleOnChange}></input>
            })
        }
    }

    useEffect(() => {
        fetchEvent(id)
        if(props.singleEvent) {
            initialEvent()
        }
    }, [])

    const handleOnChange = (e) => {
        setLocalEvent({
            ...localEvent,
            [e.target.name]: e.target.value
        })
        setEdited(false)
    }

    const handleOnClick = (localEvent) => {
        let startString = formats.ISOstring(localEvent.startDate, localEvent.startTime);
        let endString = formats.ISOstring(localEvent.endDate, localEvent.endTime);

        let eventObj = {
            title: localEvent.title,
            start: startString,
            end: endString,
            allDay: localEvent.allDay,
            id: id
        }

        console.log(localEvent)
        console.log(eventObj)
        props.editEvent(eventObj)
        setEdited(true)
    }

    if (props.singleEvent) {

        return(
            <div>
                {edited && <h1>Event edited!</h1>}
                <label>Title:</label>
                <input onChange={handleOnChange} name="title" type="text" defaultValue={localEvent.title}></input>
                <label>Start Date</label>
                <input type="date" name="startDate" onChange={handleOnChange} defaultValue={localEvent.startDate}></input>
                <label>Start Time</label>
                <input type="time" name="startTime" onChange={handleOnChange} defaultValue={localEvent.startTime}></input>
                <label>End Date</label>
                <input type="date" name="endDate" onChange={handleOnChange} defaultValue={localEvent.endDate}></input>
                <label>End Time</label>
                <input type="time" name="endTime" onChange={handleOnChange} defaultValue={localEvent.endTime}></input>
                <label>All Day Event?</label>
                {localEvent.checkbox}
                <button onClick={() => {handleOnClick(localEvent)}}>Edit</button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Loading!</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        singleEvent: state.eventR.singleEvent
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSingleEvent: (id) => dispatch(eventActions.fetchSingleEvent(id)),
        editEvent: (localEvent) => dispatch(eventActions.editEvent(localEvent))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent)