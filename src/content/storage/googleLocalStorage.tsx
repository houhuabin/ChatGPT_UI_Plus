import Storage from './storage'
import { NoteData } from '../redux/types/noteTypes'

class GoogleLocalStorage implements Storage {
    get(id: string): NoteData | null {
        const rawData = localStorage.getItem(id);
        return rawData ? JSON.parse(rawData) : null;
    }

    add(data: NoteData): void {
        localStorage.setItem(data.id, JSON.stringify(data));
    }

    getNotesFromLocalStorage = (): NoteData[] | null => {
        const notesString = localStorage.getItem('notes');
        if (notesString) {
            return JSON.parse(notesString);
        }
        return null;
    }

    delete(id: string, notes: NoteData[]): void {
        console.log("storage delete by id --------\n------ save all to local" + id);
        // const store = useStore<RootState>();
        // const notesState = store.getState().notes;
        //const deleteNote = findNoteById(id);
        // localStorage.removeItem(id);
        const allNotesDataString = JSON.stringify(notes);

        // 存储到localStorage
        localStorage.setItem('notes', allNotesDataString);

    }


    update(data: NoteData): void {
        this.add(data);  // Reuse the add method since it will override the existing data
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
