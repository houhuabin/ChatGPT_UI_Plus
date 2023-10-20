import React from 'react'
import Overlay from './Overlay/Overlay'
import { useSelector } from 'react-redux'

import { findNotesByRootName } from './redux/reducers/notesReducer'

import LeftBarBlock from './LeftBarBlock2'
import './app.scss'
import Menu from './Overlay/Menu/Menu'
import NewNote from './Overlay/NewNote/NewNote'

export default function App() {

    const allNotesData = useSelector((state: any) => state.notes);
    const promptRootNotes = findNotesByRootName(allNotesData, "prompt");
    console.log(promptRootNotes.length + "  promptRootNotes length");

    const noteRootNotes = findNotesByRootName(allNotesData, "notion");

    const chatHistoryRootNotes = findNotesByRootName(allNotesData, "chat");

    return (
        <div className='left-bar' >
            <LeftBarBlock rootNotes={promptRootNotes} allNotesData={allNotesData} title="prompt" />

            <LeftBarBlock rootNotes={noteRootNotes} allNotesData={allNotesData} title="notion" />
            <LeftBarBlock rootNotes={chatHistoryRootNotes} allNotesData={allNotesData} title="chat" />
            <Overlay Component={Menu} componentName="Menu" />
            <Overlay Component={NewNote} componentName="NewNote" />
        </div>
    )
}
