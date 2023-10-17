import React from 'react'
import Menu, { MenuBlockData } from '../Menu/Menu'
import MenuItem from '../MenuItem/MenuItem'
import './menu-block.scss'

export default function MenuBlock({ menuBlockDatas }: { menuBlockDatas: MenuBlockData[] }) {
    return (
        <div className='menu-block'>
            {menuBlockDatas.map(menuBlockData => <MenuItem menuBlockData={menuBlockData} key={menuBlockData.id} />)}

        </div>
    )
}
