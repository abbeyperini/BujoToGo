import { userConstants } from './userActionTypes';
import { userService } from './userService';
import history from '../../utils/history';

export const userActions = {
    login,
    register
}

function login(user) {
    return dispatch => {
        userService.login(user)
        .then(
            result => {
                if (result.login === true) {
                    dispatch(success(result.user));
                    history.push('/dashboard');
                } else if (result.login === false) {
                    let error = "Username or password is incorrect."
                    dispatch(failure(error))
                }
            },
            error => {
                dispatch(failure(error))
            }
        )
    }

    function success(user) { return { type: userConstants.LOGIN_SUCCESS, payload: user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, payload: error } }
}

function register(user) {
    return dispatch => {
        userService.register(user)
        .then(
            result => {
                if (result.userAdded === true) {
                    dispatch(success(result.user));
                    history.push('/dashboard');
                } else if (result.userAdded === false) {
                    let error = "Username exists."
                    dispatch(failure(error))
                }
            },
            error => {
                dispatch(failure(error));
            }
        )
    }

    function success(user) { return { type: userConstants.REGISTER_SUCCESS, payload: user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, payload: error } }
}