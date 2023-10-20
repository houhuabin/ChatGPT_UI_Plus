import React from 'react'
import AddSVG from '../../svg/AddSVG'
import './block-header.scss'

export default function BlockHead({ title }: { title: string }) {
    return (
        <div className='block-header-conatiner'>
            <div className='block-header-title'>{title}</div>
            <div className='right-icon-container'>
                <div className='right-icon'>
                    <AddSVG />
                </div>


            </div>
        </div>
    )
}
