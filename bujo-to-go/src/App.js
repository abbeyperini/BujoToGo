import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from './helpers';
import { alertActions } from './actions';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { PrivateRoute } from './components/PrivateRoute';
import Dashboard from './components/Dashboard';


function App() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  // BrowserRouter ignores history, rework with Router?
  return (
    <div className="App">
      <div>
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <BrowserRouter history={history}>
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
