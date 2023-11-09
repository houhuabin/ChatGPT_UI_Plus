import React from 'react'
import Note from '../Notes/Note'


import { NoteData } from '../redux/types/noteTypes'

import style from './leftbar-block.module.scss'
import BlockHead from './BlockHeader'
import AddSVG from '../../svg/AddSVG'


export default function LeftBarBlock({ rootNotes, allNotesData, title }: { rootNotes: NoteData[], allNotesData: NoteData[], title: string }) {

    return (

        <div className={style.leftBarBlockBody}>

            <BlockHead rootNotes={rootNotes} title={title} />

            {rootNotes.map((note: NoteData) => (
                <Note key={note.id} noteData={note} allNotesData={allNotesData} />
            ))}


        </div>


    )
}
