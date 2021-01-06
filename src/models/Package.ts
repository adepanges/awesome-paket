/**
 * @author Ade Pangestu
 **/
"use strict";

import { Property, CollectionOf } from "@tsed/schema";
import { Indexed, Model, ObjectID, Unique, PreHook } from "@tsed/mongoose";
import { Default, Enum, Format, Ignore, Maximum, MaxLength, Minimum, MinLength, Pattern, Required } from "@tsed/schema";
import slugify from "../helpers/Slugify";

import { IPackage } from "../interfaces/models/Package";
import { ITransaction, TransactionState } from "../interfaces/models/Transaction";
import { IRefLocation } from "../interfaces/models/Location";

import { Base } from "./Base";
import { RefConnote } from "./Connote";
import { RefKoli } from "./Koli";
import { RefTransaction } from "./Transaction";
import { Location, RefCustomerLocation } from "./Location";

@Model({
    schemaOptions: {
        collection: "packages",
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    },
})
export default class Package extends RefTransaction implements IPackage {
    @Property()
    @Required()
    transaction_id: string;

    @Property()
    @Required()
    organization_id: number;

    @Property()
    @Required()
    location_id: ObjectID;

    @Property()
    @CollectionOf(RefConnote)
    connote?: RefConnote;

    @Property()
    @CollectionOf(RefCustomerLocation)
    origin_data?: RefCustomerLocation;

    @Property()
    @CollectionOf(RefCustomerLocation)
    destination_data?: RefCustomerLocation;

    @Property()
    @CollectionOf(RefKoli)
    koli_data?: RefKoli[];

    @Property()
    @CollectionOf(Location)
    currentLocation?: Location;

    @Property()
    custom_field?: any;

    @PreHook("save")
    static preSave(data: Package, next: any) {
        next();
    }
}