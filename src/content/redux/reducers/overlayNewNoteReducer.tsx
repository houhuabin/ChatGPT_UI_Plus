

import { SHOW_NEW_NOTE_OVERLAY, HIDE_NEW_NOTE_OVERLAY } from '../types/overlayNewNoteTypes';
import { OverlayNewNoteData } from '../types/overlayNewNoteTypes';

const initialState: OverlayNewNoteData = {
    showOverlay: false,
};

const overlayNewNoteReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SHOW_NEW_NOTE_OVERLAY:
            console.log(" SHOW_NEW_NOTE_OVERLAY new note ovelayXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
            return {
                ...state,
                showOverlay: true,

                noteID: action.payload.noteID
            }
        case HIDE_NEW_NOTE_OVERLAY:
            return {
                ...state,
                showOverlay: false
            };
        default:
            return state;
    }
};

export default overlayNewNoteReducer;

