
import { SHOW_PLAN_OVERLAY, HIDE_PLAN_OVERLAY } from '../types/planTypes';


export const showPlanOverlay = (pointX: number, pointY: number) => {

    return {
        type: SHOW_PLAN_OVERLAY,
        payload: { pointX, pointY }
    }
};


export const hidePlanOverlay = () => {
    return {
        type: HIDE_PLAN_OVERLAY
    };
};
