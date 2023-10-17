import React from 'react'
import { ShareNoteData } from './Data/ShareNoteData';
import { ShareOverlayData } from './Data/ShareOverlayData';
import Note from './Notes/Note';
import { DocumentType } from './Data/ShareNoteData';


export default function content() {

    // 创建一个note变量，包含subnote数组
    const noteData: ShareNoteData = {
        id: "101",
        title: 'My Note',
        content: 'John Doe',
        depth: 0,
        expand: true,
        documentType: DocumentType.Prompt,
        subnote: [
            {
                id: "101_1",
                title: 'Subnote 1_1',
                content: 'Alice',
                documentType: DocumentType.Note,
                subnote: [
                    {
                        id: "101_1_1",
                        title: 'Subnote 1_1_1',
                        documentType: DocumentType.Note,
                        content: 'Bob',
                        subnote: [],
                        depth: 2,

                        expand: false,
                    },

                ],
                depth: 1,
                expand: false,
            },
            {
                id: "101_2",
                title: 'Subnote 1_2',
                content: 'Bob',
                subnote: [],
                depth: 1,
                documentType: DocumentType.Note,
                expand: false,
            },
        ],
    };

    return (
        <Note initialNoteData={noteData} />
    )
}
