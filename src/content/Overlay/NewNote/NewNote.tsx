import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote, editNote } from '../../redux/actions/noteActions';
import { hideNewEditNoteOverlay } from '../../redux/actions/overlayNewNoteActions'
import store from '../../redux/Store';
import { NoteData, NoteType } from '../../redux/types/noteTypes';
import styles from './new-note.module.scss';
import NewNoteHead from './NewNoteHead';

//noteID means parent noteData id
export default function NewNote({ parentNoteID, noteData }: { parentNoteID: string, noteData: NoteData }) {

    const dispatch = useDispatch();



    const [title, setTitle] = useState(noteData?.title || '');
    const [content, setContent] = useState(noteData?.content || '');
    const [noteType, setNoteType] = useState(noteData?.noteType || 'prompt');
    //const parentNoteID = noteID;
    //

    const handleOKButtonClick = () => {

        //determin if is is add or edit by noteData,              
        if (noteData) {
            // console.log(noteData.id + "   noteData.id  -----------------parentNoteID   " + parentNoteID + "  " + noteData);
            noteData.title = title;
            noteData.content = content;
            noteData.noteType = noteType as NoteType;
            dispatch(editNote(parentNoteID, noteData));
        } else {

            dispatch(addNote(parentNoteID, title, content, noteType as NoteType));
        }

        dispatch(hideNewEditNoteOverlay());
        //dispatch(hideNewNoteOverlay());
    };
    const handleCanceButtonClick = () => {
        // console.log("cancel button click!");

        dispatch(hideNewEditNoteOverlay());
    };

    //newNoteContainer set to full screen to contain the dialogContainer and make it in the center 
    return (

        <div className={styles.newNote}>

            <div className={styles.titleContainer}>
                <input
                    className={styles.titleInput}
                    placeholder="Enter title here..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                />
                <select
                    className={styles.documentTypeSelect}
                    value={noteType}
                    onChange={(e) => setNoteType(e.target.value)}
                >
                    <option value="prompt">prompt</option>
                    <option value="notion">notion</option>
                    <option value="chat">chat</option>
                </select>
            </div>
            <div className={styles.contentContainer}>
                <textarea
                    className={styles.content}
                    placeholder="Type your content here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className={styles.buttons}>
                <div className={styles.buttonConatinerLeft}>
                    <button className={styles.button} onClick={handleCanceButtonClick}> Cancel </button>
                </div>
                <div className={styles.buttonConatinerRight}>
                    <button className={styles.button} onClick={handleOKButtonClick}> OK </button>
                </div>
            </div>
        </div>

    )
}
