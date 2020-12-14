import React, { useState } from 'react';
import WeeklyBujo from './WeeklyBujo';
import WeeklyCalendar from './WeeklyCalendar';
import SwitchComponents from './SwitchComponents';

function Weekly() {
    const [activeComponent, setActiveComponent] = useState("WeeklyBujo")

    const handleOnClick = () => {
        if (activeComponent === "WeeklyBujo") {
            setActiveComponent("WeeklyCalendar");
        } else if (activeComponent === "WeeklyCalendar") {
            setActiveComponent("WeeklyBujo");
        }
    }

    return (
        <div>
            <button onClick={handleOnClick}>Switch View</button>
            <SwitchComponents active={activeComponent}>
                <WeeklyBujo name="WeeklyBujo" />
                <WeeklyCalendar name="WeeklyCalendar" />
            </SwitchComponents>
        </div>
    )
}

export default Weekly;