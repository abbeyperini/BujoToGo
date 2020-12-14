import React, { useState } from 'react';
import AddBullet from './AddBullet';
import DailyBujo from './DailyBujo';
import DailyCalendar from './DailyCalendar';
import SwitchComponents from './SwitchComponents';

function Daily(props) {
    const [activeComponent, setActiveComponent] = useState("DailyBujo")

    const handleOnClick = () => {
        if (activeComponent === "DailyBujo") {
            setActiveComponent("DailyCalendar");
        } else if (activeComponent === "DailyCalendar") {
            setActiveComponent("DailyBujo");
        }
    }

    return (
        <div className="main-block">
            <SwitchComponents active={activeComponent}>
                <DailyBujo name="DailyBujo" />
                <DailyCalendar name="DailyCalendar" history={props.history} />
            </SwitchComponents>
            <button className="secondary-button" onClick={handleOnClick}>Switch View</button>
            <AddBullet />
        </div>
    )
}

export default Daily;