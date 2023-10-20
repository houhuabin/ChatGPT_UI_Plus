import React, { useEffect, useState } from 'react';
import './right-kebab.scss';

import { useDispatch } from 'react-redux';
import { showMenus } from '../../redux/actions/overlayMenuActions';

import KebabSVG from '../../../svg/KebabSVG';
import { NoteData } from '../../redux/types/noteTypes';

export default function RightKebab({ noteData }: { noteData: NoteData }) {

    const dispatch = useDispatch();
    const handleClick = (event) => {
        dispatch(showMenus(event.clientX, event.clientY, noteData.id));
    };


    return (
        <div className='right-action'>
            <div className='kebab-button' onClick={handleClick}>
                <KebabSVG />
            </div>
        </div>
    )
}
