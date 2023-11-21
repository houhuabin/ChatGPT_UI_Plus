import Storage, { Identifiable } from "./storage";


class LocalStorage<T> implements Storage<T> {
    get(id: string): T | null {
        const item = localStorage.getItem(id);
        return item ? JSON.parse(item) : null;
    }

    add(id: string, data: T): void {
        localStorage.setItem(id, JSON.stringify(data));
    }

    delete(uid: string): void {
        localStorage.removeItem(uid);
    }

    update(id: string, data: T): void {
        localStorage.setItem(id, JSON.stringify(data));
    }

    addAll<U extends T & Identifiable>(data: U[]): void {
        data.forEach(item => this.add(item.id, item));
    }

    clear(): void {
        localStorage.clear();
    }

    getAll(prefix: string): T[] {
        const items: T[] = [];

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

export default LocalStorage;
