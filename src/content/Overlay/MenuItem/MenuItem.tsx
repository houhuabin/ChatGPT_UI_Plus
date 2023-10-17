import React from 'react'
import DeleteSVG from '../../../svg/DeleteSVG'
import { MenuBlockData } from '../Menu/Menu'
import MenuHotkey from '../MenuHotkey/MenuHotkey'
import './menu-item.scss'
import MenuIcon from './MenuIcon'
export default function MenuItem({ menuBlockData }: { menuBlockData: MenuBlockData }) {




    return (
        <div className='menu-item'>
            <div className='icon-wrapper'>
                <MenuIcon menuBlockData={menuBlockData} />

            </div>
            <div className='menu-text'>
                {menuBlockData.title}
            </div>
            <div className='hotkey-container' >

                <MenuHotkey text={menuBlockData.hotKey} />
            </div>

        </div>
    )
}
