import React from 'react';
import { NavLink } from 'react-router-dom';
import { formats } from '../utils/dateFormat';

function Dashboard() {
    
    let todayObj = formats.todayDate();

    return(
        <div className="main-block">
            <h1>Index</h1>
            <nav>
                <p><NavLink to="/monthly">{todayObj.month}</NavLink></p>
                <p><NavLink to="/weekly">{todayObj.month} - Week {todayObj.weekNum}</NavLink></p>
                <p><NavLink to="/daily">{todayObj.day}, {todayObj.month} {todayObj.date}</NavLink></p>
            </nav>
        </div>
    )
}

export default Dashboard;