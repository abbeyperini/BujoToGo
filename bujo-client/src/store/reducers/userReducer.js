import { userConstants } from '../actions/userActionTypes';

const initialState = { isAuthenticated: false };

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case userConstants.LOGIN_SUCCESS:
            return Object.assign( {}, state, {
                isAuthenticated: true
            })
        case userConstants.LOGIN_FAILURE:
            return Object.assign({}, state, {
                isAuthenticated: false,
                error: action.payload
            })
        case userConstants.REGISTER_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: true
            })
        case userConstants.REGISTER_FAILURE:
            return Object.assign({}, state, {
                isAuthenticated: false,
                error: action.payload
            })
        case userConstants.LOGOUT:
            return Object.assign({}, state, {
                isAuthenticated: false
            })
        default:
            return {
                state
            }
    }
}

export default reducer;