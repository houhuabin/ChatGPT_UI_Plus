
import { TOGGLE_MENU_OVERLAY, HIDE_MENU_OVERLAY } from '../types/overlayMenuTypes';


export const showMenus = (pointX: number, pointY: number, noteID: string) => {
    return {
        type: TOGGLE_MENU_OVERLAY,
        payload: { pointX, pointY, noteID }
    }
};


export const hideOverlay = () => {
    return {
        type: HIDE_MENU_OVERLAY
    };
};
