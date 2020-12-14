import { getUnequalProps } from '@fullcalendar/react';
import React, { useState } from 'react';
import AddBullet from './AddBullet';
import MonthlyBujo from './MonthlyBujo';
import MonthlyCalendar from './MonthlyCalendar';
import SwitchComponents from './SwitchComponents';

function Monthly(props) {
    const [activeComponent, setActiveComponent] = useState("MonthlyBujo")

    const handleOnClick = () => {
        if (activeComponent === "MonthlyBujo") {
            setActiveComponent("MonthlyCalendar");
        } else if (activeComponent === "MonthlyCalendar") {
            setActiveComponent("MonthlyBujo");
        }
    }

    return (
        <div className="main-block">
            <SwitchComponents active={activeComponent}>
                <MonthlyBujo name="MonthlyBujo" />
                <MonthlyCalendar name="MonthlyCalendar" history={props.history}/>
            </SwitchComponents>
            <button onClick={handleOnClick} className="secondary-button">Switch View</button>
            <AddBullet />
        </div>
    )
}

export default Monthly;