import React from 'react';
import { NavLink } from 'react-router-dom';
import { userActions } from '../store/actions/userActions';
import { connect} from 'react-redux';
import { ReactComponent as Logo } from '../images/bujoLogo.svg';

function Header(props) {

    const handleOnClick = () => {
        props.logout()
    }

    return(
        <header className="flex-row">
            <div className="flex-row">
                <h1>BujoToGo</h1>
                <Logo className="header-logo" alt="BujoToGo logo"/>
            </div>
            <nav>
                { props.isAuth ? <p><NavLink to='/dashboard'>Home</NavLink></p> : null }
                { props.isAuth ? <p><NavLink to="/key">Key</NavLink></p> : null }
                { props.isAuth ? <p><NavLink to="/settings">Settings</NavLink></p> : null }
                { props.isAuth ? <button onClick={handleOnClick}>Logout</button> : null }
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