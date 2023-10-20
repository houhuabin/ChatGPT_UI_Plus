import React from 'react'
import ChatSVG from './ChatSVG';
import PromptSVG from './PromptSVG';
import NotionSVG from './NotionSVG';
import { NoteType } from '../content/redux/types/noteTypes';




export default function NoteTypeSVG({ noteType }: { noteType: NoteType }) {
    switch (noteType) {
        case NoteType.PROMPT:
            return <PromptSVG />;
        case NoteType.NOTION:
            return <NotionSVG />;
        case NoteType.CHAT:
            return <ChatSVG />;
        default:
            return <div>Invalid NoteType</div>;
    }
}
