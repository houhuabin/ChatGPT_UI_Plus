import { createStore, combineReducers } from 'redux';
import notesReducer from './reducers/notesReducer';
import overlayMenuReducer from './reducers/overlayMenuReducer';
import overlayNewNoteReducer from './reducers/overlayNewNoteReducer';
import userReducer from './reducers/planReducer';
import appReducer from './reducers/appReducer';
import planReducer from './reducers/planReducer';




const rootReducer = combineReducers({
    overlayMenu: overlayMenuReducer,
    overlayNewNote: overlayNewNoteReducer,
    notes: notesReducer,
    plan: planReducer,
    app: appReducer,

});

const store = createStore(rootReducer);

export default store;

