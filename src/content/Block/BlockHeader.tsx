import React from 'react'
import AddSVG from '../../svg/AddSVG'
import { showNewNoteOverlay } from '../redux/actions/overlayNewNoteActions';
import store from '../redux/Store';
import style from './block-header.module.scss'
import { useDispatch } from 'react-redux';
import { NoteData } from '../redux/types/noteTypes';
export default function BlockHead({ title, rootNotes }: { title: string, rootNotes: NoteData[] }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        const parentNoteIDs = {
            "prompt": "note_prompt",
            "notion": "note_notion",
            "chat": "note_chat"
        };

        let parentNoteID = parentNoteIDs[title];
        dispatch(showNewNoteOverlay(parentNoteID));
    };


    return (
        <div className={style.container} >
            <div className={style.title}>{title}</div>
            {/* 判断 rootNotes 是否为空 并且 title 不是 "chat" */}
            {//(!rootNotes || rootNotes.length === 0) && title !== "chat" && (
                <div className={style.iconContainer} onClick={handleClick}>
                    <AddSVG />
                </div>
                // )
            }
        </div>
    )
}
