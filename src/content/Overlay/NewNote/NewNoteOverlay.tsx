import React, { useEffect, useState } from 'react'


import style from '../overlay.module.scss'

import { useSelector } from 'react-redux';

import NewNote from './NewNote';

// ... (其他引入)

// 增加一个新的参数：Component
export default function NewNoteOverlay() {
    const overlayData = useSelector((state: any) => {
        return state.overlayNewNote;

    });


    // const dispatch = useDispatch();

    // const handleOverlayClick = () => {
    //dispatch(hideNewNoteOverlay());
    // };

    if (!overlayData.showOverlay) {
        return null;
    }


    return (
        <div id="overlay" className={style.overlay} >

            <div className={style.innerCenterContainer} >
                <div className={style.dialogContainer} >

                    <NewNote noteData={overlayData.noteData} parentNoteID={overlayData.parentNoteID} parentNoteType={overlayData.parentNoteType} />
                </div>
            </div>

        </div>
    )
}
