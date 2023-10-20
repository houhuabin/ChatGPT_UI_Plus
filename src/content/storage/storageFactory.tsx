import Storage from './storage';
import InMemoryStorage from './inMemoryStorage';
import GoogleLocalStorage from './googleLocalStorage';

export enum StorageType {
    InMemory,
    LocalStorage
}

export function createStorage(type: StorageType): Storage {
    switch (type) {
        case StorageType.InMemory:
            return new InMemoryStorage();
        case StorageType.LocalStorage:
            return new GoogleLocalStorage();
        default:
            throw new Error("Invalid storage type");
    }
}
