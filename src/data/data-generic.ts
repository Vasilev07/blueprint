
export class Data {
    public Model: any;
    public includes = [];

    constructor(Model: any, includes = []) {
        this.Model = Model;
 
        this.includes = includes;
    }
    getAll() {
    }
    getById(id: any) {
    }
    create(obj: any) {
        if (obj === null || typeof obj === 'undefined') {
            throw new Error('Invalid object');
        }

        const modelToSave = new this.Model(obj);
        return modelToSave.save();
    }
}
