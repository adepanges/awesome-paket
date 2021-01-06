import { IGlobal } from "./IGlobal";

export interface IRead extends IGlobal {
    findById?(id: any, query: any): any;
    find?(query: any): any;
    count?(query: any): any;
    findAll?(query: any): any;
    countAll?(query: any): any | void;
    findActive?(query: any): any;
    countActive?(query: any): any;
}