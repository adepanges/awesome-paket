import { ObjectID } from "@tsed/mongoose";

export interface IBase {
    _id?: ObjectID;
    is_active: boolean;
    is_deleted: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}