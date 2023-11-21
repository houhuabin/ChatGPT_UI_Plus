
export interface Identifiable {
    id: string;
}


interface Storage<T> {
    get(id: string): T | null;
    add(id: string, data: T): void;
    delete(id: string): void;
    update(id: string, data: T): void;
    addAll<U extends T & Identifiable>(data: U[]): void;
    clear(): void;
    getAll(prefix: string): T[];
}

export default Storage;
