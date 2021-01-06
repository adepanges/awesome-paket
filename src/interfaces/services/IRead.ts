export interface IRead<D> {

    count(conditions: any): any;
    find(conditions: any, fields: string, options: any): any;
    findOne(conditions: any, fields: string, options: any): any;
    findById(_id: string | any, fields: string, options: any): any;

}