import React, { useState } from 'react';
import WeeklyBujo from './WeeklyBujo';
import WeeklyCalendar from './WeeklyCalendar';
import SwitchComponents from './SwitchComponents';
import AddBullet from './AddBullet';

function Weekly(props) {
    const [activeComponent, setActiveComponent] = useState("WeeklyBujo")

    const handleOnClick = () => {
        if (activeComponent === "WeeklyBujo") {
            setActiveComponent("WeeklyCalendar");
        } else if (activeComponent === "WeeklyCalendar") {
            setActiveComponent("WeeklyBujo");
        }
    }

    return (
        <div className="main-block">
            <SwitchComponents active={activeComponent}>
                <WeeklyBujo name="WeeklyBujo" />
                <WeeklyCalendar name="WeeklyCalendar" history={props.history}/>
            </SwitchComponents>
            <button className="secondary-button" onClick={handleOnClick}>Switch View</button>
            <AddBullet />
        </div>
    )
}

export default Weekly;