import { userConstants } from '../constants';

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case userConstants.GETALL_SUCCESS:
            return {
                items: action.users
            };
        case userConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case userConstants.DELETE_REQUEST:
            // add 'deleting:true' property to user being deleted
            return {
                ...state,
                items: state.items.map(user =>
                    user.id === action.id
                    ? { ...user, deleting: true }
                    : user
                )
            };
        case userConstants.DELETE_SUCCESS:
            // remove delted user from state
            return {
                items: state.items.filter(user => user.id !== action.id)
            };
        case userConstants.DELTE_FAILURE:
            // remove 'delteing:true' property and add 'delteError:[error]' property to user
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.id === action.id) {
                        // make copy of user without 'deleting:true'
                        const { deleting, ...userCopy } = user;
                        //return copy of user with 'delteError:[error]' property
                        return { ...userCopy, deleteError: action.error };
                    }

                    return user;
                })
            };
        default:
            return state;
    }
}