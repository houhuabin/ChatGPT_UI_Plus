import { createStorage, StorageType } from "./storageFactory";


export const storageInstance = createStorage(StorageType.LocalStorage);