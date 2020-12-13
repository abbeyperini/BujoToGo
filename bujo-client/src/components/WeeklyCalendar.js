import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import AddBullet from './AddBullet';


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
        <AddBullet />
    </div>
)

export default WeeklyCalendar;