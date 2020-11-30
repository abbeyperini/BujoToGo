import React from 'react';
import { userService } from '../services/user.service';

function Dashboard() {
    return(
        <div>
            <h1>Dashboard</h1>
        <button onClick={userService.logout}>Log out</button>
        </div>
    )
}

export default Dashboard;