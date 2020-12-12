import { userConstants } from '../actions/userActionTypes';

const initialState = { isAuthenticated: false };

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case userConstants.LOGIN_SUCCESS:
            return state
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case userConstants.REGISTER_SUCCESS:
            return state
        case userConstants.REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case userConstants.LOGOUT:
            return state
        default:
            return state
    }
}

export default reducer;