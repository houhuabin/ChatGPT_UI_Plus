import React from 'react'
import CloseSVG from '../../../svg/CloseSVG'
import style from './new-note-head.module.scss'

export default function NewNoteHead() {
    return (
        <div className={style.container}>
            <div className={style.deleteButton} >
                <CloseSVG />
            </div>
        </div>
    )
}
