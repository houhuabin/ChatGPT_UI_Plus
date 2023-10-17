import React, { useState } from 'react';
import ToggleSVG from '../../../svg/ToggleSVG';
import { ShareNoteData } from '../../Data/ShareNoteData';
import "./toggle.scss";
export default function Toggle({ noteData, handleToggle }: { noteData: ShareNoteData, handleToggle: (data: ShareNoteData) => void }) {

    const rotateDegree = noteData.expand ? '0deg' : '-90deg';
    const onToggle = () => {
        const updatedData = { ...noteData, expand: !noteData.expand };
        handleToggle(updatedData);
    };


    return (
        <div className='toggle-container' onClick={onToggle}>
            <div className='toggle-button'>
                <ToggleSVG rotateDegree={rotateDegree} />
            </div>
        </div>
    )
}
