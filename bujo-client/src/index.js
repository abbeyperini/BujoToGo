import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import BaseLayout from './components/BaseLayout';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import userReducer from './store/reducers/userReducer';
import eventReducer from './store/reducers/eventReducer';
import Dashboard from './components/Dashboard';
import RegisterPage from './components/RegisterPage';
import AboutPage from './components/AboutPage';
import requireAuth from './components/requireAuth';
import MonthlyCalendar from './components/MonthlyCalendar';
import WeeklyCalendar from './components/WeeklyCalendar';
import DailyCalendar from './components/DailyCalendar';
import Monthly from './components/Monthly';
import EditEvent from './components/EditEvent';

const rootReducer = combineReducers({
  userR: userReducer,
  eventR: eventReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/index" component={App} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/dashboard" component={requireAuth(Dashboard)} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/calendar/monthly" component={requireAuth(MonthlyCalendar)} />
            <Route exact path="/calendar/weekly" component={requireAuth(WeeklyCalendar)}/>
            <Route exact path="/calendar/daily" component={requireAuth(DailyCalendar)}/>
            <Route exact path="/monthly" component={requireAuth(Monthly)}/>
            <Route exact path="/events/edit-event/:id" component={requireAuth(EditEvent)}/>
          </Switch>
        </BaseLayout>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
