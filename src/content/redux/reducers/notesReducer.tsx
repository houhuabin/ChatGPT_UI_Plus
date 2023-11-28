

import { NoteData } from '../types/noteTypes'
import { DELETE_NOTE, TOOGLE_NOTE, ADD_NOTE, EDIT_NOTE, ADD_CHAT } from '../actions/noteActions'
import { NoteType } from '../types/noteTypes'
import { noteDataStorageInstance } from '../../storage/storageInstance'
import initialData from './initialNotes.json'
import NoteDataStorageUtils from '../../storage/noteDataStorageUtils'

const notesFromStorage: NoteData[] = noteDataStorageInstance.getAll("note_");

const initialState: NoteData[] = notesFromStorage ? notesFromStorage : initialData.map(note => ({
    //const initialState: NoteData[] = initialData.map(note => ({
    ...note,
    noteType: note.noteType as NoteType
}));

//storageInstance.addAllNotes(initialState);

const notesReducer = (state: NoteData[] = initialState, action: any): NoteData[] => {
    const noteDataStorageUtils = new NoteDataStorageUtils(noteDataStorageInstance);
    let newState;
    switch (action.type) {
        case TOOGLE_NOTE:
            newState = toggleNodeExpand(state, action.payload.id);


            break;
        case DELETE_NOTE:
            newState = removeNoteById(state, action.payload.id);
            noteDataStorageUtils.delete(action.payload.id);

            //storageInstance.clear();
            break;
        case ADD_NOTE:
            //noteID means parent id passed from the menu

            const newAddNote = createNewNoteData({
                state: state,
                parentNoteID: action.payload.parentID,
                title: action.payload.title,
                content: action.payload.content,
                noteType: action.payload.noteType
            });

            newState = addChildNoteToState(state, newAddNote);

            noteDataStorageUtils.addNoteData(newAddNote);
            break;

        case ADD_CHAT:
            //noteID means parent id passed from the menu

            // 假设 state 和 action 已经被定义
            let liIDExists = state.some(note => note.liID === action.payload.liID);

            if (!liIDExists) {
                // 如果没有找到匹配的liID，则执行以下代码
                const newChat = createNewNoteData({
                    state: state,
                    parentNoteID: action.payload.parentID,
                    title: action.payload.title,
                    content: action.payload.URL,
                    noteType: action.payload.noteType
                });
                newChat.liID = action.payload.liID;
                newState = addChildNoteToState(state, newChat);

                noteDataStorageUtils.addNoteData(newChat);
            } else {
                newState = state;
            }
            // 如果找到了匹配的liID，这里的代码将被跳过

            break;
        case EDIT_NOTE:

            // console.log(state.length + "   ====state.length+===========   ");
            newState = state.map(note => {
                if (note.id === action.payload.noteData.id) {
                    // console.log(note.id + "   ====note.id +===========   " + action.payload.noteData.title);
                    return action.payload.noteData; // 直接使用传入的NoteData替换旧的NoteData
                }
                return note;
            });

            noteDataStorageInstance.update(action.payload.noteData.id, action.payload.noteData);
            break;
        /*case SET_SELECTED_CHAT:

            // console.log(state.length + "   ====state.length+===========   ");
            console.log(action.payload.url, "action.payload.url");
            newState = state.map(note => {
                if (note.content === action.payload.url) {
                    // console.log(note.id + "   ====note.id +===========   " + action.payload.noteData.title);
                    //return action.payload.noteData; // 直接使用传入的NoteData替换旧的NoteData
                    note.selected = true;
                } else {
                    note.selected = false;
                }
                return note;
            });

            noteDataStorageInstance.update(action.payload.noteData.id, action.payload.noteData);
            break;*/
        default:
            newState = state;
            break;
    }

    return newState;
};

export const findNoteById = (allNotes: NoteData[], id: string): NoteData | undefined => {
    return allNotes.find(note => note.id === id);
};



export const findAllDesendantsById = (allNotes: NoteData[], id: string): NoteData[] => {
    const result2: NoteData[] = [];
    // 查找所有直接子节点
    const directChildren = allNotes.filter(note => note.parentID === id);
    directChildren.forEach(child => {
        // console.log(child.id + " ------------------   child id");

        // 递归地查找每个子节点的子孙节点，但不包括当前子节点
        result2.push(child);
        findAllDesendantsById(allNotes, child.id);
        ///result.push(...descendants);
    });
    return result2;
};


export const findNotesByRootName = (allNotes: NoteData[], rootName: string): NoteData[] => {
    const result: NoteData[] = [];
    // 查找所有直接子节点
    const roots = allNotes.filter(note => note.parentID === rootName);
    // console.log(rootName + "  =============== console.log(rootName);");
    result.push(...roots);  // 首先添加所有直接的子节点
    return result;
};


const removeNoteById = (allNotes: NoteData[], id: string): NoteData[] => {
    return allNotes.map(note => {
        // 如果当前节点是目标节点，直接返回null
        if (note.id === id) {
            return null;
        }

        // 如果当前节点有子note，处理它们
        if (note.subNoteIDs.length > 0) {
            const newSubNoteIDs = note.subNoteIDs.map(subNoteId => {
                const subNote = allNotes.find(n => n.id === subNoteId);
                if (subNote && subNote.id === id) {
                    return null;  // 如果子note是目标节点，返回null
                }
                return subNoteId;
            }).filter(subNoteId => subNoteId !== null) as string[]; // 过滤掉null的子note ID

            return {
                ...note,
                subNoteIDs: newSubNoteIDs
            };
        }

        // 如果当前节点既不是目标节点，也没有子节点，返回原始节点
        return note;

    }).filter(note => note !== null) as NoteData[]; // 过滤掉null的节点
};



const toggleNodeExpand = (allNotes: NoteData[], noteId: string): NoteData[] => {
    return allNotes.map(note => {
        // 如果当前节点是目标节点，切换其expand状态
        if (note.id === noteId) {
            const updatedNote = { ...note, expand: !note.expand };

            // 然后使用更新后的 note 对象调用 update 方法
            noteDataStorageInstance.update(note.id, updatedNote);

            // 返回更新后的 note 对象
            return updatedNote;
        }

        return note;
    });
};


const generateID = () => {
    // Simple ID generator. This can be replaced with a more robust ID generation method if desired.
    return "note_" + Math.random().toString(36).slice(2, 11);
};





type NoteProps = {

    state: NoteData[];

    parentNoteID: string;
    title: string;
    content: string;
    noteType: NoteType;
};


const createNewNoteData = ({
    parentNoteID,

    title,
    content,
    noteType,
    state
}: NoteProps): NoteData => {
    //if parentNode is not exist it is a root Node
    const parentNote = state.find(note => note.id === parentNoteID);
    // state.map((note) => { console.log("  ==== " + note.id) });
    /// console.log("---------------------" + parentNoteID);
    // if (!parentNote) {
    // throw new Error('Parent note not found');
    //}
    return {
        id: generateID(),
        title,
        content,
        depth: parentNote ? (parentNote.depth + 1) : 0,
        expand: false,
        subNoteIDs: [],
        noteType,
        parentID: parentNoteID,
        liID: null,
        selected: false
    };
};




const addChildNoteToState = (
    state: NoteData[],
    newNote: NoteData
): NoteData[] => {
    const parentNoteIndex = state.findIndex(note => note.id === newNote.parentID);
    //state.map((note) => { console.log("  ==== " + note.id) });
    // console.log("---------------------" + newNote.parentID);

    //if (parentNoteIndex === -1) {
    // throw new Error('Parent note not found');
    //}
    const newState = state.slice(); // Create a shallow copy of the state

    //  If parentNoteIndex is -1, it indicates that this is a root node.
    if (parentNoteIndex != -1) {
        const parentNote = { ...newState[parentNoteIndex] }; // Create a shallow copy of the parent note

        parentNote.subNoteIDs.push(newNote.id);
        // Update parent note and add the new note to the state
        newState[parentNoteIndex] = parentNote;
    }
    // console.log(newState.length + "   newState.length before push ====================");
    newState.push(newNote);
    // console.log(newState.length + "   newState.length after push ====================  parentid:  " + newNote.parentID);

    return newState;
};

export default notesReducer;
