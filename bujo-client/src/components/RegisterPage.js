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
        props.register(user)
    }

    return (
        <div className="LoginBoxes">
          <input onChange={handleOnChange} type="text" placeholder="username" name="username"></input>
          <input onChange={handleOnChange} type="text" placeholder="password" name="password"></input>
          <button onClick={handleOnClick}>Register</button>
          <p>Already have a username? <NavLink to="/index">Login</NavLink></p>
        </div>
      );
}

const mapDispatchToProps = (dispatch) => {
    return{
        register: (user) => dispatch(userActions.register(user))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(RegisterPage));