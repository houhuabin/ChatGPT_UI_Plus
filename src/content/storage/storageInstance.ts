import { User } from "firebase/auth";
import { NoteData } from "../redux/types/noteTypes";
import { getStorage, StorageType } from "./storageFactory";
import { AppState } from "../redux/reducers/appReducer";



export const noteDataStorageInstance = getStorage<NoteData>();
export const appStorageInstance = getStorage<AppState>();
