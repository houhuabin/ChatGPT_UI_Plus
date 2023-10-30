import React from 'react'
import Overlay from './Overlay/Menu/MenuOverlay'
import { useSelector } from 'react-redux'

import { findNotesByRootName } from './redux/reducers/notesReducer'

import LeftBarBlock from './Block/LeftBarBlock2'
import style from './app.module.scss'

import NewNoteOverlay from './Overlay/NewNote/NewNoteOverlay'
import MenuOverlay from './Overlay/Menu/MenuOverlay'
import SettingBlock from './Block/SettingBlock'
import AuthOverlay from './Auth/D_AuthOverlay'



export default function App() {


    const appState = useSelector((state: any) => state.app);
    const allNotesData = useSelector((state: any) => state.notes);
    const promptRootNotes = findNotesByRootName(allNotesData, "note_prompt");
    //console.log(promptRootNotes.length + "  promptRootNotes length");

    const noteRootNotes = findNotesByRootName(allNotesData, "note_notion");

    const chatHistoryRootNotes = findNotesByRootName(allNotesData, "note_chat");


    return (
        <div className={style.leftBar}>

            {appState && appState.userInfo && <div >Welcome, {appState.userInfo.displayName}!</div>}

            <LeftBarBlock rootNotes={promptRootNotes} allNotesData={allNotesData} title="prompt" />

            <LeftBarBlock rootNotes={noteRootNotes} allNotesData={allNotesData} title="notion" />

            <LeftBarBlock rootNotes={chatHistoryRootNotes} allNotesData={allNotesData} title="chat" />

            <NewNoteOverlay />
            <MenuOverlay />

        </div>
    )
}
