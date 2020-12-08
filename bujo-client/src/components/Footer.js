import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="flex-row">
            <NavLink to="/about"><p>About</p></NavLink>
            <p>&copy; 2020</p>
        </footer>
    )
}

export default Footer;