/**
 * @author Ade Pangestu
 **/
"use strict";

import { Property } from "@tsed/schema";
import { ObjectID, PreHook, Schema } from "@tsed/mongoose";
import { Default, Enum, Maximum, MaxLength, Minimum, Required } from "@tsed/schema";

import { IKoli, IRefKoli } from "../interfaces/models/Koli";
import { IRefCustomer, IRefCustomerAttribute } from "../interfaces/models/Customer";

import { Base } from "./Base";

@Schema()
export class RefKoli extends Base implements IRefKoli {

    @Property()
    location_id: ObjectID;

    @Property()
    koli_id: string;

    @Property()
    awb_url: string;

    @Property()
    koli_chargeable_weight: any;

    @Property()
    koli_surcharge: Array<any>;

    @Property()
    koli_description: string;

    @Property()
    koli_formula_id: null;

    @Property()
    connote_id: string;

    @Property()
    koli_length: number;

    @Property()
    koli_width: number;

    @Property()
    koli_height: number;

    @Property()
    koli_weight: number;

    @Property()
    koli_volume: number;

    @Property()
    koli_custom_field: any;

    @Property()
    koli_code: string;
}