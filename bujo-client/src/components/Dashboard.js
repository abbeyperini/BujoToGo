import React from 'react';
import { NavLink } from 'react-router-dom';
import { formats } from '../utils/dateFormat';

function Dashboard() {
    
    let todayObj = formats.todayDate();

    return(
        <div className="main-block">
            <h1>Index</h1>
            <nav className="index-nav">
                <NavLink to="/monthly"><p className="index-option">{todayObj.month}</p></NavLink>
                <NavLink to="/weekly"><p className="index-option">{todayObj.month} - Week {todayObj.weekNum}</p></NavLink>
                <NavLink to="/daily"><p className="index-option">{todayObj.day}, {todayObj.month} {todayObj.date}</p></NavLink>
            </nav>
        </div>
    )
}

export default Dashboard;