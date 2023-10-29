
import { HIDE_AUTH_OVERLAY, SHOW_AUTH_OVERLAY } from '../types/userTypes';


export const showAuth = () => {
    return {
        type: SHOW_AUTH_OVERLAY
    }
};


export const hideOverlay = () => {
    return {
        type: HIDE_AUTH_OVERLAY
    };
};
