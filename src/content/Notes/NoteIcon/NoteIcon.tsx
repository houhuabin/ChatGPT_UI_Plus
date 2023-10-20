import React from 'react'
import NoteTypeSVG from '../../../svg/NoteTypeSVG'

import { NoteData } from '../../redux/types/noteTypes'

import './note-icon.scss'
export default function NoteIcon({ noteData }: { noteData: NoteData }) {




    return (
        <div className='note-icon-container'>
            <div className='note-icon'>
                <NoteTypeSVG noteType={noteData.noteType} />
            </div>
        </div>
    )
}
