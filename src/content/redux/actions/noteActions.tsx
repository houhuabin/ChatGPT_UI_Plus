

export const Toggle_Note = 'Toggle_Note';
export const toggleNote = (id: string) => {
    return {
        type: Toggle_Note,
        payload: { id }
    };
};


export const DELETE_NOTE = 'DELETE_NOTE';

export const deleteNote = (id) => ({
    type: DELETE_NOTE,
    payload: { id }
})

export const addNote = (id) => ({
    type: DELETE_NOTE,
    payload: { id }
})

