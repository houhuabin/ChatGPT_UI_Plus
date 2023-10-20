export enum NoteType {
    PROMPT = "prompt",
    NOTION = "notion",
    CHAT = "chat"
}

export interface NoteData {
    id: string;
    title: string;
    content: string;
    depth: number;
    expand: boolean;
    subNoteIDs: string[];
    noteType: NoteType;
    parentID: string;
}
