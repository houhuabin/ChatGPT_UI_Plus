import { NoteData, NoteType } from "../types/noteTypes";


export const TOOGLE_NOTE = 'TOOGLE_NOTE';
export const toggleNote = (id: string) => {
    return {
        type: TOOGLE_NOTE,
        payload: { id }
    };
};


export const DELETE_NOTE = 'DELETE_NOTE';

export const deleteNote = (id) => ({
    type: DELETE_NOTE,
    payload: { id }
})

export const ADD_NOTE = 'ADD_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const ADD_CHAT = 'ADD_CHAT';

export const addNote = (parentID: string, title: string, content: string, noteType: NoteType) => ({
    type: ADD_NOTE,
    payload: { parentID, title, content, noteType }
})


export const addChat = (parentID: string, title: string, URL: string, liID: string, noteType: NoteType) => ({
    type: ADD_CHAT,
    payload: { parentID, title, URL, liID, noteType }
})

export const editNote = (parentID: string, noteData: NoteData) => ({
    type: EDIT_NOTE,
    payload: { parentID, noteData }
})

