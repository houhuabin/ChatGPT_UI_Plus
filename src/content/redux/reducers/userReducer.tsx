
import { SHOW_AUTH_OVERLAY, HIDE_AUTH_OVERLAY, UserData } from '../types/userTypes';

const initialState: UserData = {
    showOverlay: false,

};

const overlayMenuReducer = (state: UserData = initialState, action: any) => {
    switch (action.type) {
        case SHOW_AUTH_OVERLAY:
            console.log("  SHOW_AUTH_OVERLAY!!!!!!!!!!!!!!!!!!!");
            return {
                ...state,
                showOverlay: true,

            }
        case HIDE_AUTH_OVERLAY:
            return {
                ...state,
                showOverlay: false
            };
        default:
            return state;
    }
};

export default overlayMenuReducer;
