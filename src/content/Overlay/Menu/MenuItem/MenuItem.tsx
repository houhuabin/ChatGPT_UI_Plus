import React from 'react'
import { MenuBlockData } from '../Menu'
import MenuHotkey from '../MenuHotkey/MenuHotkey'
import style from './menu-item.module.scss'
import MenuIcon from './MenuIcon'
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../../redux/actions/noteActions'
import { showEditNoteOverlay, showNewNoteOverlay } from '../../../redux/actions/overlayNewNoteActions'
import store from '../../../redux/Store'
import { findNoteById } from '../../../redux/reducers/notesReducer'

export default function MenuItem({ menuBlockData, noteID, noteType }: { menuBlockData: MenuBlockData, noteID: string, noteType: string }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        if (menuBlockData.id === 1) {
            dispatch(deleteNote(noteID));
        } else if (menuBlockData.id === 2) {
            dispatch(showNewNoteOverlay(noteID, noteType));
        } else if (menuBlockData.id === 3) {

            const currentState = store.getState();
            const notesData = currentState.notes;
            const noteData = findNoteById(notesData, noteID);

            dispatch(showEditNoteOverlay(noteData.parentID, noteData));
            // console.log(noteData.title + "  =================noteData.title==============================");

            //  dispatch(showNewNoteOverlay(noteID));
        }
    };


    return (
        <div className={style.menuItem} onClick={handleClick}>
            <div className={style.iconContainer}>
                <MenuIcon menuBlockData={menuBlockData} />

            </div>
            <div className={style.menuText}>
                {menuBlockData.title}
            </div>
            <div className={style.hotkeycontainer} >

                <MenuHotkey text={menuBlockData.hotKey} />
            </div>

        </div>
    )
}
