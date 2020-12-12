import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { userActions } from '../store/actions/userActions';
import { connect} from 'react-redux';
import { ReactComponent as Logo } from '../images/bujoLogo.svg';

function Header(props) {
    const [isAuth, setIsAuth] = useState(false)

    const handleOnClick = () => {
        props.logout()
    }
    
    useEffect(() => {
        setIsAuth(localStorage.getItem('isAuthenticated'))
    }, [])

    return(
        <header className="flex-row">
            <div className="flex-row">
                <h1>BujoToGo</h1>
                <Logo className="header-logo" alt="BujoToGo logo"/>
            </div>
            <nav>
                { isAuth === "true" ? <p><NavLink to='/dashboard'>Home</NavLink></p> : null }
                { isAuth === "true" ? <p><NavLink to="/key">Key</NavLink></p> : null }
                { isAuth === "true" ? <p><NavLink to="/settings">Settings</NavLink></p> : null }
                { isAuth === "true" ? <button onClick={handleOnClick}>Logout</button> : null }
            </nav>
        </header>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(userActions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Header);