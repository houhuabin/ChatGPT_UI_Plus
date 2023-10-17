import React, { useEffect, useState } from 'react';
import './right-kebab.scss';

import { shareOverlayData, setShareData, listeners } from '../../Data/ShareOverlayData';

import KebabSVG from '../../../svg/KebabSVG';
export default function RightKebab() {



    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        // 获取鼠标的坐标
        const x = event.clientX;
        const y = event.clientY;

        setShareData({
            ...shareOverlayData,
            showOverlay: !shareOverlayData.showOverlay, // 切换 showOverlay 的值
            pointX: x,
            pointY: y
        });
    }
    return (
        <div className='right-action'>
            <div className='kebab-button' onClick={handleClick}>
                <KebabSVG />
            </div>
        </div>
    )
}
