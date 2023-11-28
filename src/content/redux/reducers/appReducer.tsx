import { SET_USER_INFO, CLEAR_USER_INFO, SET_PREMIUM_STATUS as SET_PREMIUM_STATUS } from '../types/appTypes'
import { appStorageInstance } from '../../storage/storageInstance'
import { User } from 'firebase/auth'


export interface AppState {
    userInfo: User | null;
    isPremium: boolean;
    isDarkMode: boolean;
    notesLimitation: number;
    showPrompt: boolean;
    showChat: boolean;
    showNote: boolean;
}



const defaultState = {
    userInfo: null,
    isPremium: false,
    isDarkMode: false,
    notesLimitation: 5,
    showPrompt: true,
    showChat: true,
    showNote: true,

};

// Use type assertion here if you are sure about the returned type
const initialState: AppState = appStorageInstance.get("app") as AppState || defaultState;
initialState.notesLimitation = initialState.notesLimitation || 5;
//const initialState: AppState = defaultState;
//console.log("===appStorageInstance.get app ===", appStorageInstance.get("app"));
//console.log("===app ==== user ===", initialState.userInfo);

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_INFO: {
            // 更新 state 之前先定义一个新的 state
            const newState = {
                ...state,
                userInfo: action.payload.userInfo
            };

            // 现在 newState 包含了更新的信息，将它存储起来
            appStorageInstance.update("app", newState);

            // 输出信息以便调试
            console.log("SET_USER_INFO ==action.payload.userInfo== ", action.payload);

            // 返回更新后的 state
            return newState;
        }
        case SET_PREMIUM_STATUS: {
            // 更新 state 之前先定义一个新的 state
            const newState = {
                ...state,
                isPremium: action.payload.isPremium,
                notesLimitation: action.payload.isPremium ? 10000000 : state.notesLimitation
            };

            // 现在 newState 包含了更新的信息，将它存储起来
            appStorageInstance.update("app", newState);

            console.log("-==== new is premium--====", action.payload.isPremium, " limitation ", newState.notesLimitation);
            // 输出信息以便调试
            // console.log("SET_USER_INFO ==action.payload.userInfo== ", action.payload);

            // 返回更新后的 state
            return newState;
        }
        case CLEAR_USER_INFO:
            const newState = {
                ...state,
                userInfo: null,
                isPremium: null
            };
            appStorageInstance.update("app", newState);

            return newState;

        default:
            return state;
    }
};

export default appReducer;
