import React, { useEffect, useState } from 'react'
import Menu from './Menu/Menu'

import './overlay.scss'

import { shareOverlayData, setShareData, listeners } from '../Data/ShareOverlayData';
export default function Overlay() {
    const [, forceUpdate] = useState({});

    useEffect(() => {
        const callback = () => forceUpdate({});
        listeners.push(callback);
        return () => {
            const index = listeners.indexOf(callback);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, []);


    const handleClick = () => {
        //console.log("    shareData.showOverlay   =================");
        setShareData({
            ...shareOverlayData,
            showOverlay: !shareOverlayData.showOverlay // 切换 showOverlay 的值
        });

    }

    if (!shareOverlayData.showOverlay) { // 使用 shareData 来判断是否显示
        return null;
    }
    return (
        <div id="overlay" className='overlay' onClick={handleClick}  >
            <div className='overlay-inner-container' >
                <Menu pointX={shareOverlayData.pointX} pointY={shareOverlayData.pointY} />
            </div>
        </div>
    )
}
