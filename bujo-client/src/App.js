import './App.css';
import React, { useState } from 'react';
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

  return (
    <div className="LoginBoxes">
      <input onChange={handleOnChange} type="text" placeholder="username" name="username"></input>
      <input onChange={handleOnChange} type="text" placeholder="password" name="password"></input>
      <button onClick={handleOnClick}>Login</button>
      <p>Need a username? <NavLink to="/register">Register</NavLink></p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(userActions.login(user))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
