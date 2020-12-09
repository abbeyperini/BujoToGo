import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


const DailyCalendar = () => (
    <div className="calendar">
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridDay"
        />
    </div>
)

export default DailyCalendar;