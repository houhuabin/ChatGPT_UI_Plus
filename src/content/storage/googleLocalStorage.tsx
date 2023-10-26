import Storage from './storage'
import { NoteData } from '../redux/types/noteTypes'

class GoogleLocalStorage implements Storage {
    delete(id: string, notes: NoteData[]): void {

        localStorage.removeItem(id);
        //localStorage.clear();
        // throw new Error('Method not implemented.');
    }
    clear() {

        localStorage.clear();
    }



    get(id: string): NoteData | null {
        const rawData = localStorage.getItem(id);
        return rawData ? JSON.parse(rawData) : null;
    }

    addAllNotes(notesData: NoteData[]) {
        notesData.map((data) => { localStorage.setItem(data.id, JSON.stringify(data)); });

    }

    add(data: NoteData, parentID: string): void {
        // 1. Store the data directly into localStorage
        localStorage.setItem(data.id, JSON.stringify(data));
        // 2. Fetch the parent node based on parentID from localStorage
        const parentDataRaw = localStorage.getItem(parentID);
        //console.log()
        if (parentDataRaw) {
            const parentData: NoteData = JSON.parse(parentDataRaw);

            // 3. Update the parent's subNoteIDs to include the new child node's ID
            parentData.subNoteIDs.push(data.id);

            // 4. Store the updated parent node back into localStorage
            localStorage.setItem(parentID, JSON.stringify(parentData));
        } else {
            //  console.error('Parent note not found in localStorage!   parentID:' + parentID);
        }

    }

    getNotesFromLocalStorage = (): NoteData[] | null => {
        const notes: NoteData[] = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);

            if (key && key.startsWith('note_')) {
                const noteString = localStorage.getItem(key);
                if (noteString) {
                    notes.push(JSON.parse(noteString));
                }
            }
        }

        return notes.length > 0 ? notes : null;
    }

    save(notes: NoteData[]): void {
        notes.forEach(note => {
            this.saveOneNote(note);
        });


    }

    saveOneNote(note: NoteData): void {
        const noteDataString = JSON.stringify(note);
        localStorage.setItem(`note_${note.id}`, noteDataString);
    }


    update(data: NoteData): void {
        localStorage.setItem(data.id, JSON.stringify(data));
        // this.add(data);  // Reuse the add method since it will override the existing data
    }

    getLocalStorageUsageInBytes() {
        let total = 0;
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                // Each character in a string is 2 bytes
                total += key.length * 2 + (localStorage[key].length * 2);
            }
        }
        return total;
    }

    /**
   * 获取所有以特定前缀开始的项
   * @param prefix 项的前缀
   * @return 返回一个对象数组
   */
    getAllItemsWithPrefix(prefix: string): any[] {
        const items = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(prefix)) {
                const item = localStorage.getItem(key);
                if (item) {
                    items.push(JSON.parse(item));
                }
            }
        }

        return items;
    }

}

export default GoogleLocalStorage;
