import { userConstants } from './actions/userActionTypes';

const reducer = (state = {}, action) => {
    switch(action.type) {
        case userConstants.LOGIN_SUCCESS:
            return {
                user: action.payload
            }
        case userConstants.LOGIN_FAILURE:
            return {
                error: action.payload
            }
        case userConstants.REGISTER_SUCCESS:
            return {
                user:action.payload
            }
        case userConstants.REGISTER_FAILURE:
            return {
                error: action.payload
            }
        default:
            return {
                state
            }
    }
}

export default reducer;