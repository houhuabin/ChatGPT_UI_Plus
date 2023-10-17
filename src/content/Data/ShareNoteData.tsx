
export enum DocumentType {
    Note = "Note",
    Prompt = "Prompt",

}

export interface ShareNoteData {
    id: string;
    title: string;
    content: string;
    depth: number;
    expand: boolean;
    subnote: ShareNoteData[];
    documentType: DocumentType;


}
