import { userConstants } from './actions/userActionTypes';

const reducer = (state = {isAuthenticated: false}, action) => {
    switch(action.type) {
        case userConstants.LOGIN_SUCCESS:
            return {
                isAuthenticated: true
            }
        case userConstants.LOGIN_FAILURE:
            return {
                isAuthenticated: false,
                error: action.payload
            }
        case userConstants.REGISTER_SUCCESS:
            return {
                isAuthenticated: true
            }
        case userConstants.REGISTER_FAILURE:
            return {
                isAuthenticated: false,
                error: action.payload
            }
        case userConstants.LOGOUT:
            return {
                isAuthenticated: false
            }
        default:
            return {
                state
            }
    }
}

export default reducer;