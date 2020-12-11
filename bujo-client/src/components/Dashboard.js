import React from 'react';
import { NavLink } from 'react-router-dom';
import { formats } from '../utils/dateFormat';

function Dashboard() {
    
    let todayObj = formats.todayDate();

    return(
        <div className="main-block">
            <h1>Index</h1>
            <nav>
                <p><NavLink to="/calendar/monthly">{todayObj.month} - calendar view</NavLink></p>
                <p><NavLink to="/monthly">{todayObj.month} - bujo view</NavLink></p>
                <p><NavLink to="/calendar/weekly">{todayObj.month} - Week {todayObj.weekNum}</NavLink></p>
                <p><NavLink to="/calendar/daily">{todayObj.day}, {todayObj.month} {todayObj.date}</NavLink></p>
                <p>Collections</p>
                <p>Future Log</p>
            </nav>
        </div>
    )
}

export default Dashboard;