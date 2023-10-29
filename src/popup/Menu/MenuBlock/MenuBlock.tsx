import React from 'react'
import Menu, { MenuBlockData } from '../Menu'
import MenuItem from '../MenuItem/MenuItem'
import style from './menu-block.module.scss'

export default function MenuBlock({ menuBlockDatas }: { menuBlockDatas: MenuBlockData[] }) {
    return (
        <div className={style.block}>
            {menuBlockDatas.map(menuBlockData => <MenuItem menuBlockData={menuBlockData} key={menuBlockData.id} />)}

        </div>
    )
}
