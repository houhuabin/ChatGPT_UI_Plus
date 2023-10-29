import React from 'react'
import style from './menu.module.scss'

import MenuBlock from './MenuBlock/MenuBlock'


export interface MenuBlockData {
    title: string;
    id: number;
    hotKey?: string;
}



export default function Menu() {

    /* const menuPosition = {
         left: `${pointX}px`,
         top: `${pointY}px`
     };
 */
    const menuBlockDatas: MenuBlockData[] = [
        { title: "Sign In", id: 1 },
        { title: "Sign Out", id: 2, hotKey: "Ctrl+Shift+R" },
        { title: "Premium Plan", id: 3, hotKey: "Ctrl+E" }
    ];

    const menuBlockDatas2: MenuBlockData[] = [
        { title: "Duplicate", id: 4 },
        { title: "Move to", id: 5, hotKey: "Ctrl+Shift+R" },
        { title: "Add to favorites", id: 6, hotKey: "Ctrl+E" }
    ];



    return (

        <div className={style.menu}>
            <MenuBlock menuBlockDatas={menuBlockDatas} />
            <div className={style.menuSeparator} ></div>
            <MenuBlock menuBlockDatas={menuBlockDatas2} />
        </div>

    )
}
