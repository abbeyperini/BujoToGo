import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <header>
            <nav>
                <NavLink to='/dashboard'><p>Home</p></NavLink>
                <NavLink to="/key"><p>Key</p></NavLink>
                <NavLink to="/settings"><p>Settings</p></NavLink>
            </nav>
        </header>
    )
}

export default Header;