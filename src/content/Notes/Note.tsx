

import React, { useState } from 'react'
import Toggle from './Toggle/Toggle'
import NoteIcon from './NoteIcon/NoteIcon'
import RightKebab from './RightKebab/RightKebab'
import NoteTitle from './NoteTitle/NoteTitle'
import './note.scss'

import { findNoteById } from '../redux/reducers/notesReducer'

import { NoteData } from '../redux/types/noteTypes'


export default function Note({ noteData, allNotesData }: { noteData: NoteData, allNotesData: NoteData[] }) {

    const subNotes = noteData.subNoteIDs.map(id => findNoteById(allNotesData, id)).filter(Boolean) as NoteData[];
    const paddingLeft = 1 * noteData.depth;
    return (
        <div className="note-container-div">
            <div className="note-div" style={{ paddingLeft: `${paddingLeft}rem` }}>
                <Toggle noteData={noteData} />
                <NoteIcon noteData={noteData} />

                <NoteTitle noteData={noteData} />
                <RightKebab noteData={noteData} />
            </div>

            {noteData.expand && subNotes.map((subNote, index) => (
                < Note noteData={subNote} allNotesData={allNotesData} key={subNote.id} />
            ))}

        </div>

    )
}
