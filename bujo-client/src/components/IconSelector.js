import React, { useEffect, useState } from 'react';

function IconSelector(props) {
    const [iconState, setIconState] = useState({icon: "task"})

    const handleOnChange = (e) => {
        setIconState({
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        props.handleIconChange(iconState)
    })
        
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
}

export default IconSelector;
