import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import AddBullet from './AddBullet';


const DailyCalendar = () => (
    <div className="calendar">
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridDay"
        />
        <AddBullet />
    </div>
)

export default DailyCalendar;