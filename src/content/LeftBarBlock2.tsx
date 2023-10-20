import React from 'react'
import Note from './Notes/Note'
import Overlay from './Overlay/Overlay'

import { NoteData } from './redux/types/noteTypes'

import './leftbar-block.scss'
import BlockHead from './Block/BlockHeader'


export default function LeftBarBlock({ rootNotes, allNotesData, title }: { rootNotes: NoteData[], allNotesData: NoteData[], title: string }) {

    return (
        <div> <div >
            <div className='left-bar-block'>
                <BlockHead title={title} />
                {rootNotes.map((note: NoteData) => (
                    <Note key={note.id} noteData={note} allNotesData={allNotesData} />
                ))}
            </div>

        </div></div>
    )
}
