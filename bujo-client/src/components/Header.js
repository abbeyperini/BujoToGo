import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { userActions } from '../store/actions/userActions';
import { connect} from 'react-redux';
import { ReactComponent as Logo } from '../images/bujoLogo.svg';

function Header(props) {
    const [isAuth, setIsAuth] = useState({});

    const handleOnClick = () => {
        props.logout()
    }
    
    useEffect(() => {
        setIsAuth(props.isAuth)
    }, [])

    return(
        <header className="flex-row">
            <div className="flex-row">
                <h1>BujoToGo</h1>
                <Logo className="header-logo" alt="BujoToGo logo"/>
            </div>
            <nav>
                { isAuth ? <p><NavLink to='/dashboard'>Index</NavLink></p> : null }
                { isAuth ? <p><NavLink to="/key">Key</NavLink></p> : null }
                { isAuth ? <button onClick={handleOnClick}>Logout</button> : null }
            </nav>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.userR.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(userActions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);