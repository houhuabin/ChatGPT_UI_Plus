
import { SHOW_PLAN_OVERLAY, HIDE_PLAN_OVERLAY, PlanData } from '../types/planTypes';

const initialState: PlanData = {
    showOverlay: false,
    pointX: 0,
    pointY: 0,
};

const overlayMenuReducer = (state: PlanData = initialState, action: any) => {
    switch (action.type) {
        case SHOW_PLAN_OVERLAY:
            // console.log("  SHOW_AUTH_OVERLAY!!!!!!!!!!!!!!!!!!!");
            return {
                ...state,
                pointX: action.payload.pointX,
                pointY: action.payload.pointY,
                showOverlay: true,

            }
        case HIDE_PLAN_OVERLAY:
            return {
                ...state,
                showOverlay: false
            };
        default:
            return state;
    }
};

export default overlayMenuReducer;
