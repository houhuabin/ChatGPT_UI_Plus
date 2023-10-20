import React from 'react'
import { NoteData } from '../../redux/types/noteTypes'

import './note-title.scss'

export default function NoteTitle({ noteData }: { noteData: NoteData }) {
    return (
        <div className='note-title-container'>
            <div className='note-title-content  notranslate'> {noteData.title}</div>
        </ div>
    )
}
