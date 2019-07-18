import { IWrite } from '../interfaces/IWrite';
import { IRead } from '../interfaces/IRead';

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    // public readonly _collection: Collection;

    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    create(item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    updateById(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}