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
        <div className="logreg-block">
            <h1>Register</h1>
            {props.error ? <h2>{props.error}</h2> : null}
            <div className="logreg_input-block">
                <label>Username</label>
                <input onChange={handleOnChange} type="text" name="username"></input>
                <label>Password</label>
                <input onChange={handleOnChange} type="password" name="password"></input>
                <label>First Name</label>
                <input onChange={handleOnChange} type="text" name="firstName"></input>
                <label>Last Name</label>
                <input onChange={handleOnChange} type="text" name="lastName"></input>
                <div className="reg-buttons">
                    <div className="logreg-primary-button-container">
                        <button onClick={handleOnClick} className="reg-primary-button">Register</button>
                    </div>
                    <div className="flex-row">
                        <hr className="line"></hr>
                        <p>or</p>
                        <hr className="line"></hr>
                    </div>
                    <NavLink to="/index"><button className="secondary-button">Login</button></NavLink>
                </div>
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