import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { userActions } from './store/actions/userActions';
import { NavLink } from 'react-router-dom';

function App(props) {
  const [user, setUser] = useState({});

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  const handleOnClick = () => {
    props.login(user)
  }

  const handleGuestLogin = () => {
    let guest = {
      username: "guest",
      password: "password"
    }

    props.login(guest)
  }

  useEffect(() => {
    userActions.logout()
  }, [])

  return (
    <div className="logreg-block">
      <h1>Log in</h1>
      {props.error ? <h2>{props.error}</h2> : null}
      <div className="logreg_input-block">
        <label>Username</label>
        <input onChange={handleOnChange} type="text" name="username"></input>
        <label>Password</label>
        <input onChange={handleOnChange} type="password" name="password"></input>
        <div className="login-buttons">
          <div className="logreg-primary-button-container">
            <button className="primary-button" onClick={handleOnClick}>Login</button>
          </div>
          <div className="flex-row">
            <hr className="line"></hr>
            <p>or</p>
            <hr className="line"></hr>
          </div>
          <NavLink to="/register"><button className="secondary-button">Register</button></NavLink>
          <button onClick={handleGuestLogin} className="tertiary-button">Guest Login</button>
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
  return {
    login: (user) => dispatch(userActions.login(user))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
