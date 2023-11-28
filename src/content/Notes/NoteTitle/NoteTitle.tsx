import React from 'react'
import { NoteData, NoteType } from '../../redux/types/noteTypes'

import style from './note-title.module.scss'

export default function NoteTitle({ noteData }: { noteData: NoteData }) {
    const handleNoteClick = () => {
        if (noteData.noteType === NoteType.CHAT) {
            // console.log(noteData.liID + "  =====liID========");

            let liElement = document.querySelector(`a[href="${noteData.liID}"]`);
            // console.log("==a== ", `a[href="${noteData.liID}"]`)
            // const liElement = document.querySelector(`li[data-projection-id="${noteData.liID}"]`) as HTMLTextAreaElement;

            if (liElement) {
                //  let aElement = liElement.querySelector('a');
                // console.log("li clicked=============");
                let aElement = liElement as HTMLAnchorElement;
                aElement.click();
            } else {
                // window.location.href = noteData.content;
            }
            //
        } else if (noteData.noteType === NoteType.PROMPT) {
            let textArea = document.getElementById("prompt-textarea") as HTMLTextAreaElement;

            if (textArea) {
                textArea.value = noteData.content;
                textArea.focus();
            }
        }
    }

    // 根据 noteData.selected 来选择适当的样式类
    const containerClass = noteData.selected
        ? `${style.container} ${style.selected}`
        : style.container;
    return (


        <div className={containerClass} onClick={handleNoteClick}>
            <div className={style.title}> {noteData.title}</div>

        </ div>
    )
}
