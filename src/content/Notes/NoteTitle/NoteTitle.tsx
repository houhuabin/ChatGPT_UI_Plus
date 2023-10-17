import React from 'react'
import { ShareNoteData } from '../../Data/ShareNoteData'

import './note-title.scss'

export default function NoteTitle({ noteData }: { noteData: ShareNoteData }) {
    return (
        <div className='note-title-container'>
            <div className='note-title-content  notranslate'> {noteData.title}</div>
        </ div>
    )
}
