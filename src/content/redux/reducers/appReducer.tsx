import { SET_USER_INFO, CLEAR_USER_INFO } from '../types/appTypes';

const initialState = {
    userInfo: null
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_INFO:

            return {
                ...state,
                userInfo: action.payload
            };
        case CLEAR_USER_INFO:
            return {
                ...state,
                userInfo: null
            };
        default:
            return state;
    }
};

export default appReducer;
