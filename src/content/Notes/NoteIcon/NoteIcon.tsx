import React from 'react'
import DocumentSVG from '../../../svg/DocumentSVG'
import DocumentPromptSVG from '../../../svg/DocumentPromptSVG'
import { ShareNoteData, DocumentType } from '../../Data/ShareNoteData'
import './note-icon.scss'
export default function NoteIcon({ noteData }: { noteData: ShareNoteData }) {
    let SVGComponent;

    switch (noteData.documentType) {
        case DocumentType.Note:
            SVGComponent = DocumentSVG;
            break;
        case DocumentType.Prompt:
            SVGComponent = DocumentPromptSVG;
            break;

        default:
            SVGComponent = DocumentSVG;
    }
    return (
        <div className='NoteIcon'>
            <SVGComponent />
        </div>
    )
}
