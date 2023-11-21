import Storage from './storage';
//import InMemoryStorage from './inMemoryStorage';
import ChromeStorage from './noteDataStorageUtils';
import LocalStorage from './LocalStorage';

export enum StorageType {
    InMemory,
    ChromeStorage
}

export function getStorage<T>(): Storage<T> {
    return createStorageByType(StorageType.ChromeStorage);
}


function createStorageByType<T>(type: StorageType): Storage<T> {

    switch (type) {
        case StorageType.InMemory:
            // 假设 InMemoryStorage 实现了 Storage<T>
            //return new InMemoryStorage<T>();
            break;
        case StorageType.ChromeStorage:
            // 假设 ChromeStorage 实现了 Storage<T>
            return new LocalStorage<T>();
        default:
            throw new Error("Invalid storage type");
    }
}
