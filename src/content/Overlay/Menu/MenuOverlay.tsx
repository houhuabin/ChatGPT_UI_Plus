import React, { useEffect, useState } from 'react'


import style from '../overlay.module.scss'

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { hideOverlay } from '../../redux/actions/overlayMenuActions';
import Menu from './Menu';
// ... (其他引入)

// 增加一个新的参数：Component
export default function MenuOverlay() {
    const overlayData = useSelector((state: any) => {

        return state.overlayMenu;
    });


    const dispatch = useDispatch();

    const handleOverlayClick = () => {
        // console.log("hide overlay!!!!!!!!!!!!!!!!");
        dispatch(hideOverlay());
    };

    if (!overlayData.showOverlay) {
        return null;
    }


    return (
        <div id="overlay" className={style.overlay} onClick={handleOverlayClick}>
            <div className={style.innerContainer}>

                <Menu pointX={overlayData.pointX} pointY={overlayData.pointY} noteID={overlayData.noteID} />

            </div>
        </div>
    )
}
