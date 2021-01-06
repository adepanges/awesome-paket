export interface IWrite<D> {

    create(item: any): any;
    update(conditions: any, item: D | any): any;
    delete(conditions: any): any;

}