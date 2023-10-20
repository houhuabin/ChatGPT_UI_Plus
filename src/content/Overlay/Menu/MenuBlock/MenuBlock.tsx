import React from 'react'
import Menu, { MenuBlockData } from '../Menu'
import MenuItem from '../MenuItem/MenuItem'
import './menu-block.scss'

export default function MenuBlock({ menuBlockDatas, noteID }: { menuBlockDatas: MenuBlockData[], noteID: String }) {
    return (
        <div className='menu-block'>
            {menuBlockDatas.map(menuBlockData => <MenuItem noteID={noteID} menuBlockData={menuBlockData} key={menuBlockData.id} />)}

        </div>
    )
}
