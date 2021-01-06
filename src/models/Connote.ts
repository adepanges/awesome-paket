/**
 * @author Ade Pangestu
 **/
"use strict";

import { Property } from "@tsed/schema";
import { ObjectID, PreHook, Schema } from "@tsed/mongoose";
import { Default, Enum, Maximum, MaxLength, Minimum, Required } from "@tsed/schema";

import { IRefConnote } from "../interfaces/models/Connote";
import { ITransaction, TransactionState } from "../interfaces/models/Transaction";
import { ILocation, IRefLocation } from "../interfaces/models/Location";

import { Base } from "./Base";

@Schema()
export class RefConnote extends Base implements IRefConnote, IRefLocation {
    @Property()
    @Required()
    connote_id: string;

    @Property()
    @Required()
    transaction_id: string;

    @Property()
    @Required()
    organization_id: number;

    @Property()
    location_id: ObjectID;

    @Property()
    connote_state_id: number;

    @Property()
    id_source_tariff: string;

    @Property()
    connote_number: number;

    @Property()
    connote_service: string;

    @Property()
    connote_service_price: number;

    @Property()
    connote_booking_code?: string;

    @Property()
    connote_amount: number;

    @Property()
    connote_code: string;

    @Property()
    number: string;

    @Property()
    connote_order: number;

    @Property()
    connote_state: string;

    @Property()
    zone_code_from: string;

    @Property()
    zone_code_to: string;

    @Property()
    surcharge_amount: null;

    @Property()
    actual_weight: number;

    @Property()
    volume_weight: number;

    @Property()
    chargeable_weight: number;

    @Property()
    connote_total_package: string;

    @Property()
    connote_surcharge_amount: string;

    @Property()
    connote_sla_day: string;

    @Property()
    location_name: string;

    @Property()
    location_type: string;

    @Property()
    source_tariff_db: string;

    @Property()
    pod: null;

    @Property()
    history: Array<any>;
}