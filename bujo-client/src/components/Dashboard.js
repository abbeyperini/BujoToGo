import React from 'react';
import { NavLink } from 'react-router-dom';

function Dashboard() {
    return(
        <div className="main-block">
            <h1>Index</h1>
            <nav>
                <p><NavLink to="/calendar/monthly">This month</NavLink></p>
                <p><NavLink to="/calendar/weekly">This week</NavLink></p>
                <p><NavLink to="/calendar/daily">Today</NavLink></p>
                <p>Collections</p>
                <p>Future Log</p>
            </nav>
        </div>
    )
}

export default Dashboard;