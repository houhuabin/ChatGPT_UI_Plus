import Storage from './storage'
import { NoteData } from '../redux/types/noteTypes'
import LocalStorage from './LocalStorage'

class NoteDataStorageUtils {
    private storage: Storage<NoteData>;

    constructor(storage: Storage<NoteData>) {
        this.storage = storage;
    }
    delete(id: string): void {

        const noteToDelete = this.storage.get(`note_${id}`);
        if (!noteToDelete) return;

        // 如果存在父对象，更新父对象的 subNoteIDs 数组
        if (noteToDelete.parentID) {
            const parentNote = this.storage.get(noteToDelete.parentID);
            if (parentNote) {
                parentNote.subNoteIDs = parentNote.subNoteIDs.filter(subId => subId !== id);
                // 更新父对象
                this.storage.update(parentNote.id, parentNote);
            }
        }

        // 删除 NoteData
        localStorage.removeItem(id);
    }




    addNoteData(data: NoteData): void {
        // 1. Store the data directly into localStorage
        this.storage.add(data.id, data);
        // 2. Fetch the parent node based on parentID from localStorage
        const parentData = this.storage.get(data.parentID);
        //console.log()
        if (parentData) {
            parentData.subNoteIDs.push(data.id);
            this.storage.update(parentData.id, parentData);
        } else {
        }

    }



}

export default NoteDataStorageUtils;
