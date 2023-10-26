import React from 'react'
import NoteTypeSVG from '../../../svg/NoteTypeSVG'

import { NoteData } from '../../redux/types/noteTypes'

import style from './note-icon.module.scss'
export default function NoteIcon({ noteData }: { noteData: NoteData }) {




    return (
        <div className={style.container}>
            <div className={style.icon}>
                <NoteTypeSVG noteType={noteData.noteType} />
            </div>
        </div>
    )
}
