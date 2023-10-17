import React from 'react'
import './menu.scss'
import MenuBlock from '../MenuBlock/MenuBlock'
import MenuItem from '../MenuItem/MenuItem'


export interface MenuBlockData {
    title: string;
    id: number;
    hotKey?: string;
}

interface MenuProps {
    pointX: number;
    pointY: number;
}

export default function Menu({ pointX, pointY }: MenuProps) {

    const menuStyle = {
        left: `${pointX}px`,
        top: `${pointY}px`
    };

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

    return (
        <div className="dialog-container menu" style={menuStyle}>
            <MenuBlock menuBlockDatas={menuBlockDatas} />
            <div className="menu-separator"></div>
            <MenuBlock menuBlockDatas={menuBlockDatas2} />
        </div>
    )
}
