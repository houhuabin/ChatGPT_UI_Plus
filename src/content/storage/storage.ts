import { NoteData } from '../redux/types/noteTypes';

// Define Storage Interface
interface Storage {
    get(id: string): NoteData | null;
    add(data: NoteData): void;
    // delete(id: string): void;
    delete(id: string, notes: NoteData[]): void;

    update(data: NoteData): void;
    getNotesFromLocalStorage(): NoteData[];
    //getAllItemsWithPrefix(prefix: string): any[];
}

export default Storage;
