import { createStore, combineReducers } from 'redux';
import notesReducer from './reducers/notesReducer';
import overlayMenuReducer from './reducers/overlayMenuReducer';
import overlayNewNoteReducer from './reducers/overlayNewNoteReducer';
import userReducer from './reducers/userReducer';
import appReducer from './reducers/appReducer';




const rootReducer = combineReducers({
    overlayMenu: overlayMenuReducer,
    overlayNewNote: overlayNewNoteReducer,
    notes: notesReducer,
    user: userReducer,
    app: appReducer,

});

const store = createStore(rootReducer);

export default store;

