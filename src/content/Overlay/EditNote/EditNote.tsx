
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/actions/noteActions';
import { hideNewEditNoteOverlay } from '../../redux/actions/overlayNewNoteActions'
import { NoteData, NoteType } from '../../redux/types/noteTypes';
import styles from './new-note.module.scss';

import { findNoteById } from '../../redux/reducers/notesReducer';
import { useSelector } from 'react-redux';

import style from '../overlay.module.scss'
import store from '../../redux/Store';
const EditNote = ({ noteId }) => {

    const currentState = store.getState();
    const notesData = currentState.notes;
    const noteData = findNoteById(notesData, noteId);
    console.log(noteData.title + "  =================noteData.title==============================");

    if (!noteData) {
        return <div>Note not found</div>;
    }

    return (

        <div id="overlay" className={style.overlay} >
            <div className={style.innerContainer}>
                <div>
                    {/* 使用 noteData 的内容进行编辑 */}
                    <h1>{noteData.title}</h1>
                    <p>{noteData.content}</p>
                    {/* 其他编辑功能... */}
                </div>
            </div>
        </div>

    );
};

export default EditNote;


