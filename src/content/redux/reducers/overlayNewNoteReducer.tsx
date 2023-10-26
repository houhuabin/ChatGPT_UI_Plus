

import store from '../Store';
import { NoteData } from '../types/noteTypes';
import { SHOW_NEW_NOTE_OVERLAY, HIDE_NEW_EDIT_NOTE_OVERLAY, SHOW_EDIT_NOTE_OVERLAY } from '../types/overlayNewNoteTypes';
import { OverlayNewNoteData } from '../types/overlayNewNoteTypes';
import { findNoteById } from './notesReducer';

const initialState: OverlayNewNoteData = {
    showOverlay: false,
    noteData: null,
};

const overlayNewNoteReducer = (state: OverlayNewNoteData = initialState, action: any) => {
    switch (action.type) {
        case SHOW_NEW_NOTE_OVERLAY:
            // console.log(" SHOW_NEW_NOTE_OVERLAY new note ovelayXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
            return {
                ...state,
                showOverlay: true,

                parentNoteID: action.payload.parentNoteID
            }
        case SHOW_EDIT_NOTE_OVERLAY:
            // console.log(" SHOW_NEW_NOTE_OVERLAY new note ovelayXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

            return {
                ...state,
                showOverlay: true,
                noteData: action.payload.noteData,
                parentNoteID: action.payload.parentNoteID,
            }
        case HIDE_NEW_EDIT_NOTE_OVERLAY:
            // console.log(" hide new note ovelayXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
            return {
                ...state,
                noteData: null,
                showOverlay: false
            };
        default:
            return state;
    }
};



export default overlayNewNoteReducer;

