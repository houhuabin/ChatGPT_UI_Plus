import { NoteData } from "./noteTypes";

export const SHOW_NEW_NOTE_OVERLAY = "SHOW_NEW_NOTE_OVERLAY";
export const SHOW_EDIT_NOTE_OVERLAY = "SHOW_EDIT_NOTE_OVERLAY";
export const HIDE_NEW_EDIT_NOTE_OVERLAY = 'HIDE_NEW_NOTE_OVERLAY';


export type OverlayNewNoteData = {
   showOverlay: boolean;
   noteData: NoteData;
   parentNoteID: string;
   parentNoteType: string;
};
