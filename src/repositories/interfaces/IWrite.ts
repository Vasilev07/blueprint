export interface IWrite<T> {
    create(item: T): Promise<boolean>;
    updateById(id: string, item: T): Promise<boolean>;
}