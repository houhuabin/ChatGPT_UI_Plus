import { NoteData } from '../types/noteTypes';
import { SHOW_NEW_NOTE_OVERLAY, HIDE_NEW_EDIT_NOTE_OVERLAY, SHOW_EDIT_NOTE_OVERLAY } from '../types/overlayNewNoteTypes';

export const showNewNoteOverlay = (parentNoteID: string) => {
    return {
        type: SHOW_NEW_NOTE_OVERLAY,
        payload: { parentNoteID }
    }
};


export const showEditNoteOverlay = (parentNoteID: string, noteData: NoteData) => {
    return {
        type: SHOW_EDIT_NOTE_OVERLAY,
        payload: { parentNoteID, noteData }
    }
};


export const hideNewEditNoteOverlay = () => {
    return {
        type: HIDE_NEW_EDIT_NOTE_OVERLAY
    };
};
