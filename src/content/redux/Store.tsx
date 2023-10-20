import { createStore, combineReducers } from 'redux';
import notesReducer from './reducers/notesReducer';
import overlayMenuReducer from './reducers/overlayMenuReducer';
import overlayNewNoteReducer from './reducers/overlayNewNoteReducer';



const rootReducer = combineReducers({
    overlayMenu: overlayMenuReducer,
    overlayNewNote: overlayNewNoteReducer,
    notes: notesReducer,
});

const store = createStore(rootReducer);

export default store;

