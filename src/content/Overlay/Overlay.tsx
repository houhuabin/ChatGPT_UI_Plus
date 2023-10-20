import React, { useEffect, useState } from 'react'
import Menu from './Menu/Menu'

import './overlay.scss'

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { hideOverlay } from '../redux/actions/overlayMenuActions';
// ... (其他引入)

// 增加一个新的参数：Component
export default function Overlay({ Component, componentName }) {
    const overlayData = useSelector((state: any) => {
        if (componentName === "Menu") {
            // console.log(" menu state ==============");
            return state.overlayMenu;

        } else if (Component.name === "NewNote") {
            // console.log("  new Note state ==============");
            return state.overlayNewNote;
        }
        console.log("eror!  can not find the component name in overlay. componentName: " + componentName);
        return null;  // Default fallback
    });


    const dispatch = useDispatch();

    const handleOverlayClick = () => {
        dispatch(hideOverlay());
    };

    if (!overlayData.showOverlay) {
        return null;
    }


    return (
        <div id="overlay" className='overlay' onClick={handleOverlayClick}>
            <div className='overlay-inner-container'>
                <Component pointX={overlayData.pointX} pointY={overlayData.pointY} noteID={overlayData.noteID} />
            </div>
        </div>
    )
}
