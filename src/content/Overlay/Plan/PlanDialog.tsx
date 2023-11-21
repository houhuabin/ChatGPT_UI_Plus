import React from 'react'
import style from './dialog.module.scss'
import Plan from './Plan'




export interface PlanMenuBlockData {
    title: string;
    id: number;
    hotKey?: string;
}

interface PlanMenuProps {
    pointX: number;
    pointY: number;

}

export default function PlanDialog({ pointX, pointY }: PlanMenuProps) {

    /* const menuPosition = {
         left: `${pointX}px`,
         top: `${pointY}px`
     };
 */

    const menuBlockDatas: PlanMenuBlockData[] = [
        { title: "$8 Per Month", id: 1 },
        { title: "$80 Per Year", id: 2, hotKey: "Ctrl+Shift+R" },
        { title: "Edit", id: 3, hotKey: "Ctrl+E" }
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

        <div className={`${style.dialogContainer} ${style.dialog}`} style={menuPosition}>
            <Plan />
            {/* 
    <div className={style.menuSeparator} ></div>
    <MenuBlock noteID={noteID} menuBlockDatas={menuBlockDatas2} />
    */}
        </div>

    )
}
