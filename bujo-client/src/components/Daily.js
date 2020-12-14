import React, { useState } from 'react';
import DailyBujo from './DailyBujo';
import DailyCalendar from './DailyCalendar';
import SwitchComponents from './SwitchComponents';

function Daily() {
    const [activeComponent, setActiveComponent] = useState("DailyBujo")

    const handleOnClick = () => {
        if (activeComponent === "DailyBujo") {
            setActiveComponent("DailyCalendar");
        } else if (activeComponent === "DailyCalendar") {
            setActiveComponent("DailyBujo");
        }
    }

    return (
        <div>
            <button onClick={handleOnClick}>Switch View</button>
            <SwitchComponents active={activeComponent}>
                <DailyBujo name="DailyBujo" />
                <DailyCalendar name="DailyCalendar" />
            </SwitchComponents>
        </div>
    )
}

export default Daily;