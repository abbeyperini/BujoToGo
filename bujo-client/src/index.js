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
import Daily from './components/Daily';
import Weekly from './components/Weekly';
import Key from './components/Key';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet
};

const rootReducer = combineReducers({
  userR: userReducer,
  eventR: eventReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <BaseLayout>
            <Switch>
              <Route exact path="/index" component={App} />
              <Route exact path="/key" component={requireAuth(Key)} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/dashboard" component={requireAuth(Dashboard)} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/calendar/monthly" component={requireAuth(MonthlyCalendar)} />
              <Route exact path="/calendar/weekly" component={requireAuth(WeeklyCalendar)}/>
              <Route exact path="/calendar/daily" component={requireAuth(DailyCalendar)}/>
              <Route exact path="/monthly" component={requireAuth(Monthly)}/>
              <Route exact path="/weekly" component={requireAuth(Weekly)} />
              <Route exact path="/daily" component={requireAuth(Daily)} />
              <Route exact path="/events/edit-event/:id" component={requireAuth(EditEvent)}/>
              <Redirect exact from="/" to="/index" />
            </Switch>
          </BaseLayout>
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
