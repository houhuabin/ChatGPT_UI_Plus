import React from 'react'
import style from './menu.module.scss'

import MenuBlock from './MenuBlock/MenuBlock'


export interface MenuBlockData {
    title: string;
    id: number;
    hotKey?: string;
}

interface MenuProps {
    pointX: number;
    pointY: number;
    noteID: string;
}

export default function Menu({ pointX, pointY, noteID }: MenuProps) {

    /* const menuPosition = {
         left: `${pointX}px`,
         top: `${pointY}px`
     };
 */
    const menuBlockDatas: MenuBlockData[] = [
        { title: "Delete", id: 1 },
        { title: "New", id: 2, hotKey: "Ctrl+Shift+R" },
        { title: "Edit", id: 3, hotKey: "Ctrl+E" }
    ];

    const menuBlockDatas2: MenuBlockData[] = [
        { title: "Duplicate", id: 4 },
        { title: "Move to", id: 5, hotKey: "Ctrl+Shift+R" },
        { title: "Add to favorites", id: 6, hotKey: "Ctrl+E" }
    ];


    const menuHeight = 200;  // 这里你可以估算菜单的高度或者动态获取
    let adjustedPointY = pointY;

    if (pointY + menuHeight > window.innerHeight) {
        adjustedPointY = pointY - menuHeight;
    }

    const menuPosition = {
        left: `${pointX}px`,
        top: `${adjustedPointY}px`
    };

    return (

        <div className={`${style.dialogContainer} ${style.menu}`} style={menuPosition}>
            <MenuBlock noteID={noteID} menuBlockDatas={menuBlockDatas} />
            {/* 
    <div className={style.menuSeparator} ></div>
    <MenuBlock noteID={noteID} menuBlockDatas={menuBlockDatas2} />
    */}
        </div>

    )
}
