import { IGlobal } from "./IGlobal";
import { ObjectID } from "@tsed/mongoose";

export interface IWrite extends IGlobal {
    create?(payload: any): any;
    updateById?(id: ObjectID, payload: any): any;
    updateMany?(payload: any): any;
    deleteById?(id: ObjectID): any;
    deleteMany?(query: any): any;
}