import React from 'react'
import './new-note.scss'
import '../dialog.scss'
import NoteTypeSVG from '../../../svg/NoteTypeSVG'
import { NoteType } from '../../redux/types/noteTypes'
export default function NewNote() {
    return (
        <div className='new-note-container '>
            <div className='dialog-container'>
                <div className='new-note'>
                    <div className='new-note-title-container'>
                        <input className='new-note-title' placeholder="Enter title here..." />

                        <select className='new-note-title-select' >
                            <option value="prompt">prompt</option>
                            <option value="notion">notion</option>
                            <option value="chat">chat</option>
                        </select>
                    </div>
                    <div className='new-note-content-container'>
                        <textarea className='new-note-content' placeholder="Type your content here..." />
                    </div>
                    <div className='new-note-title-button-container'>
                        < button className='new-note-title-button'> OK </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
