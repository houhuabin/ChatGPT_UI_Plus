

import React, { useState } from 'react'
import Toggle from './Toggle/Toggle'
import NoteIcon from './NoteIcon/NoteIcon'
import RightKebab from './RightKebab/RightKebab'
import NoteTitle from './NoteTitle/NoteTitle'
import './note.scss'
import { ShareNoteData } from '../Data/ShareNoteData'


export default function Note({ initialNoteData }: { initialNoteData: ShareNoteData }) {
    const [noteData, setNoteData] = useState(initialNoteData);
    const handleToggle = (updatedData: ShareNoteData) => {
        setNoteData(updatedData);
    };
    const paddingLeft = 1 * noteData.depth;
    return (
        <div className="note-container-div">
            <div className="note-div" style={{ paddingLeft: `${paddingLeft}rem` }}>
                <Toggle noteData={noteData} handleToggle={handleToggle} />
                <NoteIcon noteData={noteData} />

                <NoteTitle noteData={noteData} />
                <RightKebab />
            </div>

            {noteData.expand && noteData.subnote.map((subNote, index) => (
                < Note initialNoteData={subNote} key={subNote.id} />
            ))}

        </div>

    )
}
