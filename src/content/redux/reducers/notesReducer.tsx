

import { NoteData } from '../types/noteTypes'
import { DELETE_NOTE, Toggle_Note } from '../actions/noteActions'
import { NoteType } from '../types/noteTypes'
import { storageInstance } from '../../storage/storageInstance'

//const notesFromStorage: NoteData[] = storageInstance.getNotesFromLocalStorage();
//const initialState: NoteData[] = notesFromStorage ? notesFromStorage : [
const initialState: NoteData[] = [
    {
        id: '1',
        title: 'Top prompt 1',
        content: 'Content for top prompt 1',
        depth: 0,
        expand: true,
        subNoteIDs: ['2', '3'],
        noteType: NoteType.PROMPT,
        parentID: 'prompt'
    },
    {
        id: '2',
        title: 'Child prompt 1.1',
        content: 'Content for child prompt 1.1',
        depth: 1,
        expand: true,
        subNoteIDs: ['4', '5'],
        noteType: NoteType.PROMPT,
        parentID: '1'
    },
    {
        id: '3',
        title: 'Child prompt 1.2',
        content: 'Content for child prompt 1.2',
        depth: 1,
        expand: true,
        subNoteIDs: ['6', '7'],
        noteType: NoteType.PROMPT,
        parentID: '1'
    },
    {
        id: '4',
        title: 'Grandchild prompt 1.1.1',
        content: 'Content for grandchild prompt 1.1.1',
        depth: 2,
        expand: true,
        subNoteIDs: [],
        noteType: NoteType.PROMPT,
        parentID: '2'
    },
    {
        id: '5',
        title: 'Grandchild prompt 1.1.2',
        content: 'Content for grandchild prompt 1.1.2',
        depth: 2,
        expand: true,
        subNoteIDs: [],
        noteType: NoteType.PROMPT,
        parentID: '2'
    }, {
        id: '6',
        title: 'Grandchild prompt 1.2.1',
        content: 'Content for grandchild prompt 1.2.1',
        depth: 2,
        expand: true,
        subNoteIDs: [],
        noteType: NoteType.PROMPT,
        parentID: '3'
    },
    {
        id: '7',
        title: 'Grandchild prompt 1.2.2',
        content: 'Content for grandchild prompt 1.2.2',
        depth: 2,
        expand: true,
        subNoteIDs: [],
        noteType: NoteType.PROMPT,
        parentID: '3'
    }, {
        id: '8',
        title: 'Top notion 2',
        content: 'Content for top notion 2',
        depth: 0,
        expand: true,
        subNoteIDs: ['9'],
        noteType: NoteType.NOTION,
        parentID: 'notion'
    },
    {
        id: '9',
        title: 'Child notion 2.1',
        content: 'Content for child notion 2.1',
        depth: 1,
        expand: true,
        subNoteIDs: [],
        noteType: NoteType.NOTION,
        parentID: '8'
    },
    {
        id: '10',
        title: 'Top chat 3',
        content: 'Content for top chat 3',
        depth: 0,
        expand: true,
        subNoteIDs: ['11'],
        noteType: NoteType.CHAT,
        parentID: 'chat'
    },
    {
        id: '11',
        title: 'Child chat 3.1',
        content: 'Content for child chat 3.1',
        depth: 1,
        expand: true,
        subNoteIDs: [],
        noteType: NoteType.CHAT,
        parentID: '10'
    },



    // ... 同理，可以为顶级Note 2及其子孙创建更多的NoteData对象
];

const notesReducer = (state = initialState, action: any): NoteData[] => {
    let newState;
    switch (action.type) {
        case Toggle_Note:
            newState = toggleNodeExpand(state, action.payload.id);
            break;
        case DELETE_NOTE:
            newState = removeNoteById(state, action.payload.id);
            storageInstance.delete(action.payload.id, state);
            break;

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
    console.log(id + " ==============");

    // result.push(...directChildren);  // 首先添加所有直接的子节点

    directChildren.forEach(child => {
        console.log(child.id + " ------------------   child id");

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
/*
const findNoteByIdInRoots = (allRootNotes: NoteData[], id: string): NoteData | null => {
    for (let note of allRootNotes) {
        if (note.id === id) {
            return note;
        }

        if (note.subNoteIDs.length > 0) {
            for (let subNoteId of note.subNoteIDs) {
                const subNote = findNoteByIdInRoots(allRootNotes, subNoteId);
                if (subNote) {
                    return subNote;
                }
            }
        }
    }
    return null;
};*/

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
            return { ...note, expand: !note.expand };
        }

        return note;
    });
};




export default notesReducer;
