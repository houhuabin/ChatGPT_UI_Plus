export enum NoteType {
    PROMPT = "prompt",
    NOTION = "notion",
    CHAT = "chat"
}

export interface NoteData {
    id: string; // 跟Firebase 的auth User 保持一致，这样在存储的时候就方便一点
    title: string;
    content: string;
    depth: number;
    expand: boolean;
    subNoteIDs: string[];
    noteType: NoteType;
    parentID: string;
    liID?: string | null;  // 注意这里的 ?  projectionID, chat id
}
