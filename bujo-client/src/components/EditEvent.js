import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { eventActions } from '../store/actions/eventActions';
import { formats } from '../utils/dateFormat';

function EditEvent(props) {
    const [localEvent, setLocalEvent] = useState('');
    const [checkInput, setCheckInput] = useState('');
    const [edited, setEdited] = useState(false);

    let id = props.match.params.id;

    const fetchEvent = (id) => {
        props.fetchSingleEvent(id)
        if (props.singleEvent) {
            setCheck()
        }
    }


    const setCheck = () => {
        if (props.singleEvent.all_day) {
            setCheckInput({checkbox: <input type="checkbox" name="allDay" value="true" checked onChange={handleOnChange}></input>})
        } else {
            setCheckInput({checkbox: <input type="checkbox" name="allDay" value="true" onChange={handleOnChange}></input>})
        }
    }

    const iconPicker = () => {
        switch(props.singleEvent.icon) {
            case "task":
                return (
                    <div className="image-dropdown">
                    <input type="radio" id="task" name="icon" value="task" defaultChecked="checked" onChange={handleOnChange}/>
                    <label htmlFor="task" className="label-task"></label>
                    <input type="radio" id="event" name="icon" value="event" onChange={handleOnChange}></input>
                    <label htmlFor="event" className="label-event"></label>
                    <input type="radio" id="completed" name="icon" value="completed" onChange={handleOnChange}></input>
                    <label htmlFor="completed" className="label-completed"></label>
                    <input type="radio" id="migrateF" name="icon" value="migrateF" onChange={handleOnChange}></input>
                    <label htmlFor="migrateF" className="label-migrateF"></label>
                    <input type="radio" id="migrateB" name="icon" value="migrateB" onChange={handleOnChange}></input>
                    <label htmlFor="migrateB" className="label-migrateB"></label>
                    <input type="radio" id="note" name="icon" value="note" onChange={handleOnChange}></input>
                    <label htmlFor="note" className="label-note"></label>
                </div>
                )
            case "event":
                return (
                    <div className="image-dropdown">
                    <input type="radio" id="task" name="icon" value="task" onChange={handleOnChange}/>
                    <label htmlFor="task" className="label-task"></label>
                    <input type="radio" id="event" name="icon" value="event" defaultChecked="checked" onChange={handleOnChange}></input>
                    <label htmlFor="event" className="label-event"></label>
                    <input type="radio" id="completed" name="icon" value="completed" onChange={handleOnChange}></input>
                    <label htmlFor="completed" className="label-completed"></label>
                    <input type="radio" id="migrateF" name="icon" value="migrateF" onChange={handleOnChange}></input>
                    <label htmlFor="migrateF" className="label-migrateF"></label>
                    <input type="radio" id="migrateB" name="icon" value="migrateB" onChange={handleOnChange}></input>
                    <label htmlFor="migrateB" className="label-migrateB"></label>
                    <input type="radio" id="note" name="icon" value="note" onChange={handleOnChange}></input>
                    <label htmlFor="note" className="label-note"></label>
                </div>
                )
            case "completed":
                return (
                    <div className="image-dropdown">
                    <input type="radio" id="task" name="icon" value="task" onChange={handleOnChange}/>
                    <label htmlFor="task" className="label-task"></label>
                    <input type="radio" id="event" name="icon" value="event" onChange={handleOnChange}></input>
                    <label htmlFor="event" className="label-event"></label>
                    <input type="radio" id="completed" name="icon" value="completed" defaultChecked="checked" onChange={handleOnChange}></input>
                    <label htmlFor="completed" className="label-completed"></label>
                    <input type="radio" id="migrateF" name="icon" value="migrateF" onChange={handleOnChange}></input>
                    <label htmlFor="migrateF" className="label-migrateF"></label>
                    <input type="radio" id="migrateB" name="icon" value="migrateB" onChange={handleOnChange}></input>
                    <label htmlFor="migrateB" className="label-migrateB"></label>
                    <input type="radio" id="note" name="icon" value="note" onChange={handleOnChange}></input>
                    <label htmlFor="note" className="label-note"></label>
                </div>
                )
            case "migrateF":
                return (
                    <div className="image-dropdown">
                    <input type="radio" id="task" name="icon" value="task" onChange={handleOnChange}/>
                    <label htmlFor="task" className="label-task"></label>
                    <input type="radio" id="event" name="icon" value="event" onChange={handleOnChange}></input>
                    <label htmlFor="event" className="label-event"></label>
                    <input type="radio" id="completed" name="icon" value="completed" onChange={handleOnChange}></input>
                    <label htmlFor="completed" className="label-completed"></label>
                    <input type="radio" id="migrateF" name="icon" value="migrateF" defaultChecked="checked" onChange={handleOnChange}></input>
                    <label htmlFor="migrateF" className="label-migrateF"></label>
                    <input type="radio" id="migrateB" name="icon" value="migrateB" onChange={handleOnChange}></input>
                    <label htmlFor="migrateB" className="label-migrateB"></label>
                    <input type="radio" id="note" name="icon" value="note" onChange={handleOnChange}></input>
                    <label htmlFor="note" className="label-note"></label>
                </div>
                )
            case "migrateB":
                return (
                    <div className="image-dropdown">
                    <input type="radio" id="task" name="icon" value="task" onChange={handleOnChange}/>
                    <label htmlFor="task" className="label-task"></label>
                    <input type="radio" id="event" name="icon" value="event" onChange={handleOnChange}></input>
                    <label htmlFor="event" className="label-event"></label>
                    <input type="radio" id="completed" name="icon" value="completed" onChange={handleOnChange}></input>
                    <label htmlFor="completed" className="label-completed"></label>
                    <input type="radio" id="migrateF" name="icon" value="migrateF" onChange={handleOnChange}></input>
                    <label htmlFor="migrateF" className="label-migrateF"></label>
                    <input type="radio" id="migrateB" name="icon" value="migrateB" defaultChecked="checked" onChange={handleOnChange}></input>
                    <label htmlFor="migrateB" className="label-migrateB"></label>
                    <input type="radio" id="note" name="icon" value="note" onChange={handleOnChange}></input>
                    <label htmlFor="note" className="label-note"></label>
                </div>
                )
            case "note":
                return (
                    <div className="image-dropdown">
                    <input type="radio" id="task" name="icon" value="task" onChange={handleOnChange}/>
                    <label htmlFor="task" className="label-task"></label>
                    <input type="radio" id="event" name="icon" value="event" onChange={handleOnChange}></input>
                    <label htmlFor="event" className="label-event"></label>
                    <input type="radio" id="completed" name="icon" value="completed" onChange={handleOnChange}></input>
                    <label htmlFor="completed" className="label-completed"></label>
                    <input type="radio" id="migrateF" name="icon" value="migrateF" onChange={handleOnChange}></input>
                    <label htmlFor="migrateF" className="label-migrateF"></label>
                    <input type="radio" id="migrateB" name="icon" value="migrateB" onChange={handleOnChange}></input>
                    <label htmlFor="migrateB" className="label-migrateB"></label>
                    <input type="radio" id="note" name="icon" value="note" defaultChecked="checked" onChange={handleOnChange}></input>
                    <label htmlFor="note" className="label-note"></label>
                </div>
                )
            default:
                break
        }
    }

    useEffect(() => {
        fetchEvent(id)
    }, [])

    const handleOnChange = (e) => {
        setLocalEvent({
            ...localEvent,
            [e.target.name]: e.target.value
        })
        setEdited(false)
    }

    const handleOnClick = (localEvent) => {

        let eventObj = {
            icon: props.singleEvent.icon,
            title: props.singleEvent.title,
            start: props.singleEvent.start,
            end: props.singleEvent.end,
            allDay: props.singleEvent.all_day,
            id: id
        }

        if (localEvent.icon) {
            eventObj.icon = localEvent.icon;
        }

        if (localEvent.title) {
            eventObj.title = localEvent.title;
        }

        if (localEvent.startDate && localEvent.startTime) {
            eventObj.start = formats.ISOstring(localEvent.startDate, localEvent.startTime);
        }

        if (localEvent.endDate && localEvent.endTime) {
            eventObj.end = formats.ISOstring(localEvent.endDate, localEvent.endTime);
        }

        if (localEvent.allDay) {
            eventObj.allDay = localEvent.allDay;
        }

        props.editEvent(eventObj)
        setEdited(true)
    }

    if (props.singleEvent) {
        let startObj = formats.fromISOstring(props.singleEvent.start)
        let endObj = formats.fromISOstring(props.singleEvent.end);

        return(
            <div>
                {edited && <h1>Event edited!</h1>}
                {iconPicker()}
                <div className="input-block">
                    <label>Title:</label>
                    <input onChange={handleOnChange} name="title" type="text" defaultValue={props.singleEvent.title}></input>
                    <label>Start Date</label>
                    <input type="date" name="startDate" onChange={handleOnChange} defaultValue={startObj.date}></input>
                    <label>Start Time</label>
                    <input type="time" name="startTime" onChange={handleOnChange} defaultValue={startObj.time}></input>
                    <label>End Date</label>
                    <input type="date" name="endDate" onChange={handleOnChange} defaultValue={endObj.date}></input>
                    <label>End Time</label>
                    <input type="time" name="endTime" onChange={handleOnChange} defaultValue={endObj.time}></input>
                    <label>All Day Event?</label>
                    {checkInput.checkbox}
                    <button onClick={() => {handleOnClick(localEvent)}}>Edit</button>
                    <button onClick={() => {props.deleteEvent(localEvent.id)}}>Delete</button>
                </div>
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