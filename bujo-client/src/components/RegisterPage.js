import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { userActions } from '../store/actions/userActions';
import { NavLink } from 'react-router-dom';

function RegisterPage(props) {
    const [user, setUser] = useState({});

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const handleOnClick = () => {
        if (user.username && user.password && user.firstName && user.lastName) {
            props.register(user)
        }
    }

    return (
        <div className="main-block">
            {props.error ? <h2>{props.error}</h2> : null}
            <div className="input-block">
                <input onChange={handleOnChange} type="text" placeholder="username" name="username"></input>
                <input onChange={handleOnChange} type="text" placeholder="password" name="password"></input>
                <input onChange={handleOnChange} type="text" placeholder="first name" name="firstName"></input>
                <input onChange={handleOnChange} type="text" placeholder="last name" name="lastName"></input>
                <button onClick={handleOnClick}>Register</button>
                <NavLink to="/index"><button>Login</button></NavLink>
            </div>
        </div>
      );
}

const mapStateToProps = (state) => {
    return {
      error: state.error
    }
  }

const mapDispatchToProps = (dispatch) => {
    return{
        register: (user) => dispatch(userActions.register(user))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterPage));