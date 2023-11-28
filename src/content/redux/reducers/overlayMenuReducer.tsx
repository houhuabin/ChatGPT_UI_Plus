
import { TOGGLE_MENU_OVERLAY, HIDE_MENU_OVERLAY } from '../types/overlayMenuTypes';
import { OverlayMenuData as OverlayMenuData } from '../types/overlayMenuTypes';

const initialState: OverlayMenuData = {
    showOverlay: false,
    pointX: 0,
    pointY: 0,
};

const overlayMenuReducer = (state: OverlayMenuData = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_MENU_OVERLAY:
            //  console.log("toggle menu ovelay!!!!!!!!!!!!!!!!!!!");
            return {
                ...state,
                showOverlay: !state.showOverlay,
                pointX: action.payload.pointX,
                pointY: action.payload.pointY,
                noteID: action.payload.noteID,
                noteType: action.payload.noteType,
            }
        case HIDE_MENU_OVERLAY:
            return {
                ...state,
                showOverlay: false
            };
        default:
            return state;
    }
};

export default overlayMenuReducer;
