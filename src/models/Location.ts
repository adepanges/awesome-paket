/**
 * @author Ade Pangestu
 **/
"use strict";

import { Property } from "@tsed/schema";
import { ObjectID, PreHook, Schema } from "@tsed/mongoose";
import { Default, Enum, Maximum, MaxLength, MinLength, Minimum, Required } from "@tsed/schema";

import { ILocation, ICustomerLocation } from "../interfaces/models/Location";
import { IRefCustomer } from "../interfaces/models/Customer";

import { Base } from "./Base";

@Schema()
export class RefCustomerLocation extends Base implements ICustomerLocation, IRefCustomer {

    @Property()
    location_id: ObjectID;

    @Property()
    organization_id: number;

    @Property()
    customer_name: string;

    @Property()
    customer_address: string;

    @Property()
    customer_email: string;

    @Property()
    customer_phone: string;

    @Property()
    customer_address_detail: string;

    @Property()
    customer_zip_code: string;

    @Property()
    zone_code: string;

}

@Schema()
export class Location extends Base implements ILocation {

    @Property()
    @MaxLength(20)
    @MinLength(5)
    name: string;

    @Property()
    code: string;

    @Property()
    type: string;
}