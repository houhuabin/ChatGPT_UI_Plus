import React from 'react'
import style from './menu-hotkey.module.scss'
export default function MenuHotkey({ text }: { text: string }) {
    return (

        <div className={style.text}>{text}</div>

    )
}
