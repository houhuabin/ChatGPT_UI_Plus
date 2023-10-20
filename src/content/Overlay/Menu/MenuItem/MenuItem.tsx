import React from 'react'
import { MenuBlockData } from '../Menu'
import MenuHotkey from '../MenuHotkey/MenuHotkey'
import './menu-item.scss'
import MenuIcon from './MenuIcon'
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../../redux/actions/noteActions'
import { showNewNoteDialog } from '../../../redux/actions/overlayNewNoteActions'

export default function MenuItem({ menuBlockData, noteID }: { menuBlockData: MenuBlockData, noteID: String }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        if (menuBlockData.id === 1) {
            dispatch(deleteNote(noteID));
        } else if (menuBlockData.id === 2) {
            dispatch(showNewNoteDialog(noteID));
        }
    };


    return (
        <div className='menu-item' onClick={handleClick}>
            <div className='icon-wrapper'>
                <MenuIcon menuBlockData={menuBlockData} />

            </div>
            <div className='menu-text'>
                {menuBlockData.title}
            </div>
            <div className='hotkey-container' >

                <MenuHotkey text={menuBlockData.hotKey} />
            </div>

        </div>
    )
}
