
import { SET_USER_INFO, CLEAR_USER_INFO, SET_PREMIUM_STATUS } from '../types/appTypes';





export const setUserInfo = (userInfo) => ({
    type: SET_USER_INFO,
    payload: { userInfo }
});
export const setPremiumStatus = (isPremium) => ({
    type: SET_PREMIUM_STATUS,
    payload: { isPremium }
});

export const clearUserInfo = () => ({
    type: CLEAR_USER_INFO
});
