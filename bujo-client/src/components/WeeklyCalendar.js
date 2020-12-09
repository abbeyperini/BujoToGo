import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


const WeeklyCalendar = () => (
    <div className="calendar">
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridWeek"
            events={[{
                id: 'a',
                title: 'my event',
                start: '2020-12-10'
            }]}
        />
    </div>
)

export default WeeklyCalendar;