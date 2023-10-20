import React, { useState } from 'react';
import ToggleSVG from '../../../svg/ToggleSVG';
import { NoteData } from '../../redux/types/noteTypes';
import "./toggle.scss";
import { useDispatch } from 'react-redux';
import { toggleNote } from '../../redux/actions/noteActions';
export default function Toggle({ noteData }: { noteData: NoteData }) {

    const rotateDegree = noteData.expand ? '0deg' : '-90deg';


    const dispatch = useDispatch();
    const onToggle = () => {
        dispatch(toggleNote(noteData.id));
    };

    return (
        <div className='toggle-container' onClick={onToggle}>
            <div className='toggle-button'>
                <ToggleSVG rotateDegree={rotateDegree} />
            </div>
        </div>
    )
}
