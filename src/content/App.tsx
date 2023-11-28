import React from 'react'
import Overlay from './Overlay/Menu/MenuOverlay'
import { useSelector } from 'react-redux'

import { findNotesByRootName } from './redux/reducers/notesReducer'

import LeftBarBlock from './Block/LeftBarBlock2'
import style from './app.module.scss'

import NewNoteOverlay from './Overlay/NewNote/NewNoteOverlay'
import MenuOverlay from './Overlay/Menu/MenuOverlay'

import AccountBlock from './Block/AccountBlock'
import PlanOverlay from './Overlay/Plan/PlanOverlay'
import { AppState } from './redux/reducers/appReducer'
import { useDispatch } from 'react-redux';
import { showPlanOverlay } from './redux/actions/planActions'



export default function App() {


    const appState = useSelector((state: any) => state.app);
    const allNotesData = useSelector((state: any) => state.notes);
    const promptRootNotes = findNotesByRootName(allNotesData, "note_prompt");
    //console.log(promptRootNotes.length + "  promptRootNotes length");

    const noteRootNotes = findNotesByRootName(allNotesData, "note_notion");

    const chatHistoryRootNotes = findNotesByRootName(allNotesData, "note_chat");
    // console.log("allNotesData.length", allNotesData.length, "==appState.notesLimitation==", appState.notesLimitation);
    if (allNotesData.length > appState.notesLimitation) {

        const dispatch = useDispatch();
        dispatch(showPlanOverlay(window.innerWidth / 2 - 200, window.innerHeight / 2 - 200));

    }


    return (
        <div className={style.leftBar}>
            <AccountBlock  {...appState} />



            <LeftBarBlock rootNotes={promptRootNotes} allNotesData={allNotesData} title="prompt" />

            <LeftBarBlock rootNotes={noteRootNotes} allNotesData={allNotesData} title="notion" />

            <LeftBarBlock rootNotes={chatHistoryRootNotes} allNotesData={allNotesData} title="chat" />

            <NewNoteOverlay />
            <MenuOverlay />
            <PlanOverlay />

        </div>
    )
}
