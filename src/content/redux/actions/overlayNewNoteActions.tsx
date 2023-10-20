import { SHOW_NEW_NOTE_OVERLAY as SHOW_NEW_NOTE_OVERLAY, HIDE_NEW_NOTE_OVERLAY } from '../types/overlayNewNoteTypes';

export const showNewNoteDialog = (noteID: String) => {
    return {
        type: SHOW_NEW_NOTE_OVERLAY,
        payload: { noteID }
    }
};


export const hideOverlay = () => {
    return {
        type: HIDE_NEW_NOTE_OVERLAY
    };
};
