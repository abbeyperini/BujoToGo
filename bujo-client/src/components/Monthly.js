import React, { useState } from 'react';
import MonthlyBujo from './MonthlyBujo';
import MonthlyCalendar from './MonthlyCalendar';
import SwitchComponents from './SwitchComponents';

function Monthly() {
    const [activeComponent, setActiveComponent] = useState("MonthlyBujo")

    const handleOnClick = () => {
        if (activeComponent === "MonthlyBujo") {
            setActiveComponent("MonthlyCalendar");
        } else if (activeComponent === "MonthlyCalendar") {
            setActiveComponent("MonthlyBujo");
        }
    }

    return (
        <div>
            <button onClick={handleOnClick}>Switch View</button>
            <SwitchComponents active={activeComponent}>
                <MonthlyBujo name="MonthlyBujo" />
                <MonthlyCalendar name="MonthlyCalendar" />
            </SwitchComponents>
        </div>
    )
}

export default Monthly;