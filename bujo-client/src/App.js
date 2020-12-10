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
    <div className="main-block">
      {props.error ? <h2>{props.error}</h2> : null}
      <div className="input-block">
        <input onChange={handleOnChange} type="text" placeholder="username" name="username"></input>
        <input onChange={handleOnChange} type="text" placeholder="password" name="password"></input>
        <button onClick={handleOnClick}>Login</button>
        <NavLink to="/register"><button>Register</button></NavLink>
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
