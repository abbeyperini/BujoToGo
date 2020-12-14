import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { eventActions } from '../store/actions/eventActions';
import { formats } from '../utils/dateFormat';

function EditEvent(props) {
    const [localEvent, setLocalEvent] = useState({});
    const [edited, setEdited] = useState(false);

    let id = props.match.params.id;

    const fetchEvent = (id) => {
        props.fetchSingleEvent(id)
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
            start: props.singleEventstart,
            end: props.singleEventend,
            allDay: props.singleEvent.allDay,
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

    if(!props.singleEvent || props.singleLoading) {
        return (
            <div className="main-block"><h1>Loading!</h1></div>
        )
    } else if (!props.singleLoading) {
        let startObj = formats.fromISOstring(props.singleEvent.start)
        let endObj = formats.fromISOstring(props.singleEvent.end);
        
        let checkInput = '';
        if (props.singleEvent.all_day) {
            checkInput = {checkbox: <input type="checkbox" name="allDay" value="true" checked onChange={handleOnChange}></input>}
        } else {
            checkInput = {checkbox: <input type="checkbox" name="allDay" value="true" onChange={handleOnChange}></input>}
        }

        let iconPicker = '';
        if (props.singleEvent.icon === "task") {
            iconPicker = {icon: 
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
            } 
        } else if (props.singleEvent.icon === "event") {
            iconPicker = {icon: 
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
            }
        } else if (props.singleEvent.icon === "completed") {
            iconPicker = {icon:
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
            }
    } else if (props.singleEvent.icon === "migrateF") {
        iconPicker = {icon: 
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
        }
    } else if (props.singleEvent.icon === "migrateB") {
        iconPicker = {icon:
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
        }
    } else if (props.singleEvent.icon === "note") {
        iconPicker = {icon: 
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
        }
    }

        return(
            <div className="main-block">
                <h1>Edit</h1>
                {edited && <h1>Event edited!</h1>}
                <div className="input-block">
                    <label>Icon</label>
                    {iconPicker.icon}
                    <label>Title</label>
                    <input onChange={handleOnChange} name="title" type="text" defaultValue={props.singleEvent.title}></input>
                    <label>Start Date</label>
                    <input type="date" name="startDate" onChange={handleOnChange} defaultValue={startObj.date}></input>
                    <label>Start Time</label>
                    <input type="time" name="startTime" onChange={handleOnChange} defaultValue={startObj.time}></input>
                    <label>End Date</label>
                    <input type="date" name="endDate" onChange={handleOnChange} defaultValue={endObj.date}></input>
                    <label>End Time</label>
                    <input type="time" name="endTime" onChange={handleOnChange} defaultValue={endObj.time}></input>
                    <div className="checkbox-container">
                        <label>All Day Event?</label>
                        {checkInput.checkbox}
                    </div>
                    <div className="flex-row">
                        <button className="primary-button" onClick={() => {handleOnClick(localEvent)}}>Edit</button>
                        <button className="secondary-button" onClick={() => {props.deleteEvent(localEvent.id)}}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        singleLoading: state.eventR.singleLoading,
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