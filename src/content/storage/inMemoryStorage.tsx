import Storage from './storage';
import { NoteData } from '../redux/types/noteTypes';

class InMemoryStorage implements Storage {
    clear(): void {
        throw new Error('Method not implemented.');
    }
    addAllNotes(notesDatas: NoteData[]) {
        throw new Error('Method not implemented.');
    }
    private data: { [id: string]: NoteData } = {};

    get(id: string): NoteData | null {
        return this.data[id] || null;
    }

    add(data: NoteData): void {
        this.data[data.id] = data;
    }

    delete(id: string, notes: NoteData[]): void {
        delete this.data[id];
    }

    update(data: NoteData): void {
        if (this.data[data.id]) {
            this.data[data.id] = data;
        }
    }
    getNotesFromLocalStorage(): NoteData[] {
        return null;
    }
}

export default InMemoryStorage;
