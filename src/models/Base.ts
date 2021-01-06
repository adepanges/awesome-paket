/**
 * @copyright 2020 - Batik Giri Alam
 * @author Ade Pangestu
 **/

import { Property } from "@tsed/schema";
import { IBase } from "../interfaces/models/IBase";
import { Default } from "@tsed/schema";
import { ObjectID, Schema } from "@tsed/mongoose";

@Schema()
export class Base implements IBase {

    @Property()
    _id: ObjectID;

    @Property()
    @Default(true)
    is_active: boolean;

    @Property()
    @Default(false)
    is_deleted: boolean;

    @Property()
    created_at: Date;

    @Property()
    updated_at: Date;

    @Default(null)
    @Property()
    deleted_at: Date | null;
}